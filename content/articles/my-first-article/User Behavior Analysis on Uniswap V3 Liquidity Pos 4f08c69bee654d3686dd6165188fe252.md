# User Behavior Analysis on Uniswap V3 Liquidity Positions

Created: November 3, 2022 9:52 AM
Last Edited Time: November 27, 2022 12:08 PM
tag: 外部, 已发布

## Introduction

It is necessary to understand the behavioral preferences of different investors. We can explain and understand financial markets by observing the behavior of micro-individuals and analyzing their motivations. With the development of Uniswap V3, users have more options when it comes to providing liquidity. The growth of liquidity providers and the richer LP position characteristics make it possible and necessary to study the properties of V3 LPs. In this paper, we will analyze the features of liquidity position and try to give an interpretation of the LP’s motivation.

Our open source methodology is available at: [research/Position10.25.ipynb at master · zelos-alpha/research (github.com)](https://github.com/zelos-alpha/research/blob/master/pool_research/Position10.25.ipynb) We provide our code and data for free．

Stay tuned for more in-depth research from Zelos in the future. We welcome discussion. Feel free to contact: zelos@antalpha.com or make an issue in our git.

It is necessary to understand the behavioral preferences of different investors. We can explain and understand financial markets by observing micro individuals' behavior and analyzing their motivations. With the development of Uniswap V3, users have more options for providing liquidity. The growth of liquidity providers and the richer LP position characteristics make it possible and necessary to study the properties of V3 LPs. In this paper, we will analyze the features of liquidity position and try to give an interpretation of the LP's motivation.

Our open-source methodology is available at [research/Position10.25.ipynb at master · zelos-alpha/research (github.com)](https://github.com/zelos-alpha/research/blob/master/pool_research/Position10.25.ipynb). We provide our code and data for free．

Stay tuned for more in-depth research from Zelos in the future. We welcome discussion. Feel free to contact: [zelos@antalpha.com](mailto:zelos@antalpha.com) or make an issue in our git.

## Data Source

This paper uses tick-level data from December 23, 2021, to October 13, 2022. This data covers all USDC-ETH transactions on Uniswap V3 in Polygon over 294 days. 

We introduce a few important features below. 

![Untitled](User%20Behavior%20Analysis%20on%20Uniswap%20V3%20Liquidity%20Pos%204f08c69bee654d3686dd6165188fe252/Untitled.png)

tx_type: Type of transaction which includes MINT, BURN, and SWAP. MINT and BURN represent the creation and burning of LP positions respectively. SWAP indicates the interchange of USDC and ETH.

amount0: The amount of USDC with six decimal digits. 

amount1: The amount of ETH with eighteen decimal digits.

In MINT and BURN, amount represents the tokens invested or withdrawn. In SWAP, amounts represent the impact of SWAP on the pool. For example, in the second row of the graph, this transaction uses 0.03 ETH to exchange 122.850102 USDC.

current_tick: Corresponds to the ETH price at the time the transaction took place.

upper_tick: Corresponding to the lower bound of the market making range set for the position, which is the minimum ETH price needed to provide liquidity. SWAP does not have this feature.

lower_tick: Similarly, corresponding to the ETH price on the session. 

tick: The tick and ETH prices are one-to-one. 

$Price(t)= 1.0001^{t}$

## User Classification

We calculated the logarithm of the liquidity provided by each position. The positions’ distribution is plotted as follows.

![Untitled](User%20Behavior%20Analysis%20on%20Uniswap%20V3%20Liquidity%20Pos%204f08c69bee654d3686dd6165188fe252/Untitled%201.png)

LP Positions show a clear three stage distribution on log_lq (logarithmic liquidity). 10% of LPs provide liquidity less than $10^{15}$, 80% of LPs provide liquidity between $10^{15}$ and $10^{27}$, and finally 10% of users provide liquidity higher than $10^{27}$.

Therefore, we divide the users into three groups according to log_lq from small to large: 0,1,2. They represent micro-investors, general investors, and professional traders, respectively. Next, we will explore the behavioral characteristics of the different users.

## Position Lifecycle

We calculated the time from MINT to BURN for each LP position. We then plotted the distribution of holding times in minutes by group.

![Untitled](User%20Behavior%20Analysis%20on%20Uniswap%20V3%20Liquidity%20Pos%204f08c69bee654d3686dd6165188fe252/Untitled%202.png)

The figure shows that professional traders have the shortest holding time while small investors have the longest. As liquidity inputs increase, users will become more active in managing positions. Almost all positions are burned within one day.

## Volatility and Fee Incomes

We calculate the ETH price volatility at the minute level. To make the curve smoother, we use the five-day average of volatility. The USDC-denominated pool's fee earnings and volatility are shown in the chart.

![Untitled](User%20Behavior%20Analysis%20on%20Uniswap%20V3%20Liquidity%20Pos%204f08c69bee654d3686dd6165188fe252/Untitled%203.png)

There is a clear correlation between price volatility and the fee return on positions. This result is intuitive because price volatility can only be generated by SWAP. The higher the number of  SWAP transactions, the higher the overall fee return for the pool.

## Price Range Settings

To get more insight into the behavior of different investors, we focus on the market making range of positions and calculate the boundary price ratio.

Up_percent represents the ratio of the upper bound of the market making range to the ETH price at MINT time. Low_percent, similarly, is the lower bound ratio. 

We group positions by different users. Then, for each day, we calculate the average boundary price ratio. The price percent are then plotted along with volatility over time. 

![Untitled](User%20Behavior%20Analysis%20on%20Uniswap%20V3%20Liquidity%20Pos%204f08c69bee654d3686dd6165188fe252/Untitled%204.png)

The distance between the red and yellow lines is the average market-making range for the day. Small liquidity positions only appear on days of high volatility, i.e., high returns on fees. They have an extensive range of market making and relatively symmetrical lower and upper bound. Early on, small investors rarely participate in this market.

We speculate that small investors do not pay much attention to the market and behave speculatively. However, in times of high market volatility, there may have been some social media exposure that piqued the interest of small investors, so they joined the market to provide liquidity.

![Untitled](User%20Behavior%20Analysis%20on%20Uniswap%20V3%20Liquidity%20Pos%204f08c69bee654d3686dd6165188fe252/Untitled%205.png)

Medium-sized liquid positions have continuous curves and the most significant price range. They have an extensive range of market making on days of high volatility. General investors continue to follow and participate in the market to earn fee income．

![Untitled](User%20Behavior%20Analysis%20on%20Uniswap%20V3%20Liquidity%20Pos%204f08c69bee654d3686dd6165188fe252/Untitled%206.png)

In large LP positions, the upper bound is highly correlated with volatility. Low price boundaries are often slightly above the current price, as shown by the yellow curve marginally above 0 in the graph. Liquidity positions are unavailable at the time of creation to capture fee income. The position starts providing liquidity when the price rises above the low price boundary. Therefore, we believe professional investors do not create positions to earn fees but to sell Ether when the price increases. Selling Ether may be part of their trading strategy, and they simultaneously use derivatives from other markets for hedging.

## Conclusion

The above analysis shows that liquidity positions' characteristics reflect users' different preferences and investment strategies. Understanding liquidity providers' behavior and motivations can help us gain a deeper understanding of the market. This paper draws some interesting conclusions from the above perspective, using reliable data and analytical tools.

- Position Size — There is a clear distribution in the liquidity of the positions in the pool. 10% of the positions are smaller than 10¹⁵, 80% of LPs provide liquidity concentrated in 10¹⁵ and 10²⁴, and finally, 10% of users provide liquidity higher than 10²⁷. than 10²⁷.
- Lifecycle — The more extensive the liquidity, the shorter the holding time. Most positions will BURN out within a day. This indicates that most invested users manage their assets actively.
- Position Settings and Strategies — Different strategies are used by investors holding different-sized positions. Small liquid positions occur only at times of high volatility. They earn fee incomes with a speculative mindset. Investors with medium amounts participate in following the market and earn fee income. On the other hand, large investors always set the low boundary of their positions above the current price, which is equivalent to selling Ether when the price rises. Overall, most positions have a more comprehensive price upper domain than lower domain, indicating that LPs are more tolerant of price increases.

Later, we will analyze the return on investment of different investors considering the pool of various fees.

## Methodology

### Liquidity

We use the price bound of the position and the number of tokens invested to calculate the liquidity. The formula is derived from AMM's liquidity function. Since this is not the focus of this paper, we only provide the conceptual procedure.

$$
L=\frac{y}{\sqrt{P_u} - \sqrt{P_l}}, \ \ P_c > P_u
$$

$$
L=\frac{y}{\sqrt{P_c} - \sqrt{P_l}}, \ \ P_c \in [P_l,\ P_u]
$$

$$
L=\frac{x}{\frac{1}{\sqrt{P_l}} - \frac{1}{\sqrt{P_u}}}, \ \ P_c < P_l
$$

x: invested USDC amounts.

y: invested ETH amounts.

### Life cycle

With the position IDs, we rectify the MINT and BURN data to construct a complete position lifecycle. We plotted the holding time distribution for positions that have been destroyed before 2022.10.13. We also show the number of positions created in time.

![Untitled](User%20Behavior%20Analysis%20on%20Uniswap%20V3%20Liquidity%20Pos%204f08c69bee654d3686dd6165188fe252/Untitled%207.png)

![Untitled](User%20Behavior%20Analysis%20on%20Uniswap%20V3%20Liquidity%20Pos%204f08c69bee654d3686dd6165188fe252/Untitled%208.png)

The above graph shows that most positions are often held for less than five days. 95% of positions are burned within 12 days, and 99% are burned within 38 days. The daily MINT count chart shows that there are still active MINTs close to 10.13. The MINT cut-off date should be as far back as possible within the tolerance range to retain more data.

Thus, we choose 2022.9.30 as our study's cut-off date for MINT. Only positions for MINT between 2021.12.23–2022.9.30 are considered. All positions still alive are eliminated according to the time of 2022.10.13 23:59.

### Volatility and Fee Incomes

We use SWAP data to calculate historical volatility at the minute level. Handling fee returns are estimated at 0.05%.

### Boundary Price Ratio

Many investors reasonably set the price range around the current price. The percentile of the MINT price range is shown in the table below. Both prices, upper and lower bounds, are USDC-denominated ETH prices.

| percentile | Price Upper Bound | Price Lower Bound |
| --- | --- | --- |
| 0.000 | 1.57E-08 | 2.94E-27 |
| 0.005 | 919.71 | 112.38 |
| 0.995 | 7002.06 | 3885.43 |
| 1.000 | 3.40E+50 | 1.53E+15 |

Less than 2% of the positions have extreme upper or lower price bounds. These may be set arbitrarily, so we take the middle 98% of regular positions for the following analysis. For each day, we calculate the average price range of MINT. The price percent for each MINT is calculated as follows.

$$
Up\ Percent = \frac{Upper\ Bound-Current\ Price}{Current\ Price}
$$

$$
Low\ Percent = \frac{Lower\ Bound-Current\ Price}{Current\ Price}
$$

 

## Disclaimer

This is a working paper representing research in progress. The report is the production of a professional study, and its contents are intended to be informational only. This article is not and should not be considered as providing investment advice. No representation or warranty is made herein regarding the information's fairness, accuracy, reasonableness, or completeness.