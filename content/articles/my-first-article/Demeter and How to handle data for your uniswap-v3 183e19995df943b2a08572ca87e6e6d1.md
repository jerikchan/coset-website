# Demeter and How to handle data for your uniswap-v3 project

Created: October 24, 2022 10:22 AM
Last Edited Time: November 14, 2022 10:12 PM
Status: Archived
tag: demeter, 外部, 已发布

# TL；DR

1. Please consider following when you want to process v3 related data
    1. tick or bar 
    2. total liquidity or liquidity map, namely , all unclosed positions
2. 1-min resample bar data with total liquidity can meet most of use case. And we made a test to prove it!

# Introduction of Demeter

With the increasing adoption of UniswapV3, more and more traders are getting involved in this market. Professional market makers need to backtest their trading strategies using historical data to verify validity. Demeter is a pure python backtesting package designed for professional traders. ( [https://github.com/zelos-alpha/demeter](https://github.com/zelos-alpha/demeter) )

This blog will discuss about how Demeter handles v3 data for backtesting, and make a test to show that Demeter is accurate, lightweight and economical tool for backtesting. We also gives suggestions about the data-related choice for  for various uniswap project.

# Options in Backtesting and Demeter’s Choice

### Tick or Bar？

![Untitled](Demeter%20and%20How%20to%20handle%20data%20for%20your%20uniswap-v3%20183e19995df943b2a08572ca87e6e6d1/Untitled.png)

This issue of whether to use Tick data or Bar data has been discussed in analyzing traditional financial data. Here is a simple analogy to get a clearer picture of their advantages and disadvantages:the bar data is similar to using numerical methods of interation(area under curve), which can significantly reduce the data to be processed, but miss parts of the information.

The data on the tick is 100% accurate, but it can lead to extensive data. We take the data of usdc-eth 0.05% pool of Uniswap v3 in Matic as an example. After our tests, choosing 1min to resample will reduce the data mostly, from 5MB to 172.9KB for daily transactions. 

By tick means that every action (like SWAP，increasing / remove liquidity) has to recalculate the state. With tick data, the data  you load and the process will increase significantly. But microdata has specific application scenarios, such as studying the price impact of orders, JIT, etc.

For our Demeter, we use 1-min resample data for back-testing so that we can complete back-testing without losing too much information.

### Total Liquidity or Liquidity Map？

![Untitled](Demeter%20and%20How%20to%20handle%20data%20for%20your%20uniswap-v3%20183e19995df943b2a08572ca87e6e6d1/Untitled%201.png)

We also need to decide whether to collect the complete position data to construct the liquidity map (rightmost graph) or capture the current liquidity corresponding to the current price.

Total liquidity is a public variable in the pool contract and logged-in pool events for each swap. Using total liquidity will cause errors, but using liquidity map will not. CLAMM(Centralized Liquidity Auto Market Maker) changes current liquidity while the price moves to another price space edge during one swap execution.

Error cases:

1. If we make a swap, leading the price to move to the next price space, our slippage calculation will be inaccurate.
2. The swap leads to a move to the range of LP, and the estimate of the LP's fee income will be inaccurate.

However, reconstructing the liquidity map needs to manage the life cycle of each position, which also brings a lot of extra overhead in the swap calculation.

Considering that most of Demeter's backtesting actions provide and remove liquidity with few transactions (like, rebalance), we choose total liquidity to trace fee reward and pool state.

# Test

### Design

To get the performance of Demeter, we made the following test. We choose usdc-eth 0.05% pool of Uniswap v3 in Matic([https://polygonscan.com/address/0x45dda9cb7c25131df268515131f647d726f50608](https://polygonscan.com/address/0x45dda9cb7c25131df268515131f647d726f50608)) for following reasons:

1. The transaction fee on Polygon is cheaper. It leads to more active than eth mainnet
2. the usdc-eth-0.05 pool has more active liquidity providers and traders than other pools.

We downloaded all the historical data after the pool's initialization to measure the accuracy of Demeter's backtest. 

We randomly select 200 positions among those full-burn positions and then redo the operation, including adding/removing liquidity and collecting fee in our Demeter backtest environment. 

Finally, check the difference between backtested net value and the actual result. The core test code is as follows:

```python
eth = TokenInfo(name="eth", decimal=18)
usdc = TokenInfo(name="usdc", decimal=6)
pool = PoolBaseInfo(usdc, eth, 0.05, usdc)

class CheckStrategy(Strategy): # a special strategy to replicate all the actions
    def __init__(self, strategy_actions):
        super().__init__()
        self._actions: pd.DataFrame = strategy_actions

    def initialize(self): # this will be executed before backtesting start.
        for index, action in self._actions.iterrows():
            match action.tx_type: # set actions, tirggerd by time.
                case "MINT":
                    self.triggers.append(AtTimeTrigger(action.block_timestamp, self.add_at, action))
                case "COLLECT":
                    self.triggers.append(AtTimeTrigger(action.block_timestamp, self.collect_at, action))
                case "BURN":
                    self.triggers.append(AtTimeTrigger(action.block_timestamp, self.remove_at, action))

    def add_at(self, row_data: RowData, *args, **kwargs): # add liquidity
        action = args[0]
        self.broker.add_liquidity_by_tick(action.tick_lower, # to make a precise simulation, we add by tick
                                          action.tick_upper,
                                          from_unit(action.amount0, usdc),
                                          from_unit(action.amount1, eth),
                                          int(action.sqrtPriceX96)) # price when add liquidity

    def remove_at(self, row_data: RowData, *args, **kwargs): # remove liquidity
        action = args[0]
        self.broker.remove_liquidity(PositionInfo(int(action.tick_lower), int(action.tick_upper)),
                                     liquidity=abs(action.liquidity),
                                     collect=False,
                                     sqrt_price_x96=int(action.sqrtPriceX96))

    def collect_at(self, row_data: RowData, *args, **kwargs): # collect fee and funds
        action = args[0]
        self.broker.collect_fee(PositionInfo(int(action.tick_lower), int(action.tick_upper)))

if __name__ == "__main__":
    tokens = pd.read_csv("./chosen_position.csv") # load chosen positions
    token_ids = tokens.position_id.unique() # get all position id

    for i, token_id in enumerate(token_ids):
        actions: pd.DataFrame = tokens.loc[tokens.position_id == token_id].reset_index(drop=True) # get all actions(add,remove liquidity)
        start_date: pd.Timestamp = actions.block_timestamp[0]
        end_date: pd.Timestamp = actions.block_timestamp[len(actions.index) - 1]
        runner = Runner(pool) # init runner
        runner.strategy = CheckStrategy(actions) # create a new strategy entity and pass actions to it
        usdc_amount, eth_amount = get_mint_sum_amount(actions) 
        runner.set_assets([Asset(usdc, usdc_amount), Asset(eth, eth_amount)]) # set initial amount
        runner.data_path = "../data"
        runner.load_data(ChainType.Polygon.name, "0x45dda9cb7c25131df268515131f647d726f50608", start_date.date(),end_date.date()) # load data
        runner.run(enable_notify=True) # run starategy
        runner.output()

```

The actual position data is tick data. Demeter simulates it with one-min resample data.
The difference between the Demeter net value and the actual net value is calculated as follows:

> errorRate = abs(100 * (netValueOnChain - netValueBacktesting) / netValueOnChain)
> 

> netValueOnChain = sum(collectAmount0) + finalPrice(sum(collectAmount1))
> 

## Result

To get off the influence of position age, we go the distribution by position’s age, shown in the below figure. For the sample, we chose positions with their frequency.

![duration.png](Demeter%20and%20How%20to%20handle%20data%20for%20your%20uniswap-v3%20183e19995df943b2a08572ca87e6e6d1/duration.png)

The final test results are highly consistent with the data on the chain. The table below lists the top 30 positions with the most significant error rate among the 200 samples.

| position id | age(min) | backtest value | actual value | difference | error rate |
| --- | --- | --- | --- | --- | --- |
| 252285 | 17280 | 2231.7453 | 2110.9216 | 120.8237 | 5.724 |
| 190059 | 11520 | 65.5372 | 63.5268 | 2.0104 | 3.165 |
| 269784 | 1440 | 0.0268 | 0.0272 | 0.0004 | 1.471 |
| 19186 | 12960 | 2076.4564 | 2047.5269 | 28.9295 | 1.413 |
| 241849 | 5760 | 3387.085 | 3350.4879 | 36.5971 | 1.092 |
| 214091 | 60480 | 5535.2913 | 5499.3592 | 35.9321 | 0.653 |
| 215997 | 1440 | 495.0367 | 492.6603 | 2.3764 | 0.482 |
| 330459 | 1440 | 99.5088 | 99.226 | 0.2828 | 0.285 |
| 165430 | 2880 | 2360.4034 | 2365.0278 | 4.6244 | 0.196 |
| 328766 | 1440 | 129.778 | 130.0109 | 0.2329 | 0.179 |
| 101686 | 1440 | 0.9184 | 0.9198 | 0.0014 | 0.152 |
| 164127 | 1440 | 370.6477 | 370.0865 | 0.5612 | 0.152 |
| 295125 | 1440 | 0.3405 | 0.34 | 0.0005 | 0.147 |
| 317411 | 1440 | 30.8496 | 30.8771 | 0.0275 | 0.089 |
| 346749 | 24479 | 816.2357 | 815.7404 | 0.4953 | 0.061 |
| 369067 | 1439 | 0.7187 | 0.7191 | 0.0004 | 0.056 |
| 138140 | 1440 | 1567.2772 | 1568.0617 | 0.7845 | 0.05 |
| 151567 | 1439 | 530.7063 | 530.4502 | 0.2561 | 0.048 |
| 73092 | 4320 | 11.7002 | 11.7053 | 0.0051 | 0.044 |
| 144049 | 1440 | 786.1278 | 786.4215 | 0.2937 | 0.037 |
| 297487 | 1440 | 801.1985 | 800.9051 | 0.2934 | 0.037 |
| 251546 | 44640 | 6956.677 | 6954.2448 | 2.4322 | 0.035 |
| 144087 | 5760 | 279.9854 | 279.8877 | 0.0977 | 0.035 |
| 302399 | 12960 | 743.4783 | 743.7316 | 0.2533 | 0.034 |
| 228716 | 2880 | 1266.3804 | 1265.96 | 0.4204 | 0.033 |
| 201933 | 18720 | 48.3874 | 48.372 | 0.0154 | 0.032 |
| 296375 | 1440 | 2697.9696 | 2697.1408 | 0.8288 | 0.031 |
| 328246 | 41760 | 71550.9172 | 71529.6072 | 21.31 | 0.03 |
| 355242 | 1440 | 218.2803 | 218.2206 | 0.0597 | 0.027 |

![rate_count.png](Demeter%20and%20How%20to%20handle%20data%20for%20your%20uniswap-v3%20183e19995df943b2a08572ca87e6e6d1/rate_count.png)

As mentioned above, most of the errors are close to 0. Only 6 test samples have an error greater than 0.5%, and 13 test samples have an error greater than 0.1%. The simulation result is satisfactory. The error distribution is shown in the figure above, where the vertical axis is the number of positions. The horizontal axis is the error rate.

## Suggestion on Data

When you want to develop or research a v3 related project, you should consider what kind of data you need. You need to weigh the amount of data, data processing speed, and your needs. We have made a matrix to help you make the right decision. For example, in Uniswap's analysis of JIT, you should consider collecting all tick data from the beginning because the truth you want only exists there.

![choice1.png](Demeter%20and%20How%20to%20handle%20data%20for%20your%20uniswap-v3%20183e19995df943b2a08572ca87e6e6d1/choice1.png)

Considering that our users, quant is not needy for real-time performance and weighing the cost, Demeter chose to resample the 1-minute bar data and only provide the current total liquidity data to meet users' needs as much as possible. We are delighted with this choice after this test.

Another angle is whether your user needs are general purpose. If needs are very stable, you can consider using an event log to handle them. Although the cost in the early stage will be much higher, you need to understand the relationship between events and related contracts deeply. 

Zelos will develop a Docker with Demeter in the future to facilitate the download of one-minute resample data, get rid of the dependence on Bigquery, and broaden the usage scenarios of more EVM chains.
A more long-term plan is to use events to reconstruct v3 pools. If you are interested in the discussion above, don't hesitate to get in touch with [zelos@antalpha.com](mailto:zelos@antalpha.com).

# Appendix

### about Demeter **processing speed**

Since Demeter uses one-min resampled, the burden on the system is significantly reduced, dramatically improving backtest speed. 

Through the progress bar displayed during the backtesting process, you can see the pace of the progress bar in this test’s log.

![Untitled](Demeter%20and%20How%20to%20handle%20data%20for%20your%20uniswap-v3%20183e19995df943b2a08572ca87e6e6d1/Untitled%202.png)

The laptop we use is Ryzen R7 with a 4800U CPU and 16G memory. The processing speed of the position during the backtest is shown in the figure. It handles 10023 rows of data every minute. It means it only takes 52 seconds to backtest one-year data.

![Untitled](Demeter%20and%20How%20to%20handle%20data%20for%20your%20uniswap-v3%20183e19995df943b2a08572ca87e6e6d1/Untitled%203.png)