# Demeter, best uniswap backtester

Created: November 27, 2022 11:55 AM
Last Edited Time: November 27, 2022 11:56 AM

## Introduction

Uniswap is a decentralized exchange protocol built on the Ethereum blockchain; more precisely, it is an automated liquidity protocol.

There are two roles on Uniswap.
One is the liquidity provider(LP). They deposit tokens into a liquidity pool to provide the necessary liquidity reserves for trading.

The other is the buyer and seller of tokens. They exchange one token for another and pay a fee. These fees become the return of the liquidity provider.

Currently, Uniswap has a daily trading volume of over $300 million.

In 2021, Uniswap launched v3, which solved the problem of low utilization of v2 funds.

The most significant improvements are the flexibility to choose price ranges to provide liquidity and the ability to select pool rates of 0.05%, 0.3%, and 1%.

These improvements, however, increased Uniswap's complexity significantly.

Uniswap V3 is innovative in many ways. Thanks to uniswap, liquidity provision is spawned as a new investment field. LP will earn fee as income by providing liquidity. However, due to the complexity of uniswap v3, it is challenging to predict investment returns as a liquidity provider or market maker and, therefore, to develop a sound investment strategy and maximize capital utilization.

In traditional financial markets, traders often use backtesting to predict returns. Backtesting uses historical data to cross-validate an investment strategy and to evaluate metrics such as return and maximum drawdown. It is the most common means of evaluating investment strategies in quantitative trading. As more and more professional investors participate in providing liquidity. They urgently need a tool that can predict the profitability of their investments and use it as a basis for their investments. This is a very specialized need, and there is no commercial-grade framework for evaluating uniswap investment strategies. The Demeter fills this gap. It combines the advantages of existing backtesting tools and adds many new features for Uniswap. Demeter offers advantages in terms of computational efficiency and accuracy.

 At present, there are some backtesting tools for Uniswap on the market, but these tools have some shortcoming.

- active-strategy-framework is a backtesting tool for Uniswap v3 developed by the gamma strategy team, which simulates the core logic of uniswap v3. However, the design logic of this tool is not clear. Users need to read the code to get started. This brings a higher threshold for non-programmer groups. Moreover, the tool simulates uniswap by keeping the algorithm consistent but not making the underlying logic consistent. This problem results in certain errors in the calculation.
- [range.fi](http://range.fi/) is a return forecasting tool. It provides a user-friendly page where some simple strategies can be tested. But its strengths are also its weaknesses. The stand-alone web page offers few features and can only perform simple tests. For professional investors, the simple functionality is insufficient for evaluating complex strategies.

Demeter takes a different approach. Backtrader is a well-known backtesting framework in quantitative investment field. Many quants are familiar with Backtrader and use it for their trading strategies. Demeter draws on Backtrader in its core logic and usage allowing professional investors to get started with minimal cost. At the same time, Demeter offers various of functions to meet the needs of quants. In short, demeter is a commercial-grade and serious backtesting framework.

## Quick View

Using Demeter for backtesting is straightforward since it maintains the same api style as Backtrader. Users in the quantitative investment field can quickly get started. Here is a brief example.

```python
class MyFirstStrategy(Strategy):
    def next(self, row_data):
        if row_data.price == 1500:
            self.position=self.add_liquidity(1000,2000)
        if row_data.price < 1000 or row_data.price > 2000:
            self.remove_liquidity(self.position)

eth = TokenInfo(name="eth", decimal=18)
usdc = TokenInfo(name="usdc", decimal=6)
pool = PoolBaseInfo(usdc, eth, 0.05, usdc)
actuator = Actuator(pool)
actuator.set_assets([Asset(usdc, 1500), Asset(eth, 1)])
actuator.strategy = MyFirstStrategy()
actuator.load_data(ChainType.Polygon.name, "0x45dda9cb7c25131df268515131f647d726f50608", date(2022, 2, 15), date(2022, 8, 20))
actuator.run()
actuator.output()
```

In this example, we make a simple strategy. When the price is equal to 1500 usdc/eth, we add liquidity in the [1000,2000] price range, and when the price is out of range, we remove the liquidity.

To use Demeter, first, we should define the tokens and the transaction pool to test on. Then declare an Actuator instance, which is the brain of the backtest and controls the actions of the backtest process.

Next, set the initial assets. Then set a strategy instance to Actuator, so Actuator will know what to do in the backtesting process. At last, load the backtest data, which is obtained in advance through the built-in download tool of Demeter. The download tool will fetch the event log of on-chain transactions from the data source and resample the data to one-minute precision.

After loading the data, Demeter will start the backtesting process. After initialing the strategy, the following function in the strategy will process the data line by line and add/remove liquidity when the price meets certain price conditions. In addition to traversing data, Demeter also provides a variety of triggers to perform some actions at a specific time.

Finally, Demeter will print the operation history and returns. Users can also get detailed asset changes from the Broker object, then perform some operations such as strategy evaluation and drawing charts.

## Technical Features

As mentioned above, in terms of usage and syntax, Demeter draws on Backtrader, a popular backtesting framework in the financial industry. This design allows investors in the quantitative investment field to get started quickly and familiarize themselves with liquidity investing on Uniswap with a small learning cost.

In terms of calculation, for efficiency and accuracy, Demeter samples the original data for one minute. The resampling will significantly reduce the amount of data. For the usdc/weth pool on polygon, Demeter can reduce one-day data to 170kb. Smaller data volume improves the efficiency of backtesting dramatically. Demeter can process a whole year of transaction data in the test in one minute.

The accuracy of backtesting is also our concern. To ensure that the calculation of liquidity / swap fee / deposit amount can be accurate, We develop the core computing module by simulating the contract code. We also built a series of test tools to ensure that the calculation results are consistent with the contract.

## Core components

Download tool: Download data from the data source(BigQuery or Ethereum rpc nodes) and perform preprocessing and resampling. The downloaded data will be saved to the specified location and can be used repeatedly.

Broker: Manage user assets, including funds and liquidity positions. The broker also provides core operations and calculations, such as adding and removing liquidity, adjusting positions, and collecting fees.

Actuator: Actuator is the brain of Demeter; it organizes the execution of backtesting. Including initializing the test environment, loading data, initializing strategies, iterating data, etc. After executing backtesting, the user can extract asset and action history from the built-in broker.

Strategy: Strategy is the part that implements the user's idea. The user will define when and how to operate liquidity here. The user's strategy needs to inherit the Strategy class of Demeter and set triggers and actions to simulate operations in the real market.

![Untitled](Demeter,%20best%20uniswap%20backtester%203dcaea1a4f2a4a579acd2cb1faa874a6/Untitled.png)

- 这张图的源文件
    
    [演示文稿1.pptx](Demeter,%20best%20uniswap%20backtester%203dcaea1a4f2a4a579acd2cb1faa874a6/%25E6%25BC%2594%25E7%25A4%25BA%25E6%2596%2587%25E7%25A8%25BF1.pptx)
    

## Conclusion

Demeter fills the gap between Uniswap v3 and quantitative investment providing professional investors with a commercial-grade backtesting tool. Demeter takes into account calculation speed and accuracy. It will help professional investors to develop better investment strategies and gain more income. At the same time, as investment returns on Uniswap v3 are more predictable, more and more investors will join the uniswap ecosystem and become liquidity providers. 

## The name :Demeter

We made a play on words for “Demeter”. 

1. **Demeter** is the Olympian goddess of the harvest and agriculture, aka “Farming”.
2. **Demeter⇒ Defi  Meter.** 

Try Demeter,and earn by your strategy!