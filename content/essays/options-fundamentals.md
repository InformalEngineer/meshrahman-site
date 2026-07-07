---
title: "Options fundamentals for beginners"
date: "2020-12-16T16:21:00.000Z"
tags: [money]
excerpt: "What options actually are, explained the way I wish someone had explained them to me."
readingTime: 8
migrated: true
sourceSlug: options-fundamentals-for-beginners
---> A note before anything else: this is education, not advice. I'm an engineer on the internet, not your financial advisor, and past me made trades that current me would like a word about.

Options are by far the BEST way to increase returns on the assets you choose to trade, but also the very BEST way to protect & hedge yourself against market crashes and corrections. There is also spot and leveraged futures trading which I dive into as well, if you are a beginner I recommend you get started with the basics of reading candlestick charts first.

Let's go over the fundamentals in a little more detail and we will call this our option primer. It goes without saying, if you plan on trading option contracts, do so with extreme caution. There are 100 horror stories for every success. Trading is a skill that requires tremendous amounts of discipline and greed has no place here.

## Calls & Puts

When looking at options there are two kinds of options you can choose to trade: Calls and Puts.

In the standard stock market, buying one **call option** contract gives the buyer of the contract the right, but not the obligation to buy 100 shares of the stock at the strike price the buyer selected, anytime up until the option's expiration date. This is advantageous because you need to pay a fraction of the cost vs. buying at spot price (full price per stock) while participating in the same profit profile. If the trade goes well for the call buyer, meaning the asset goes way above the selected strike price, the buyer gets to buy the asset at the lower strike price value he has chosen, even though the asset is then currently worth more than the strike price.

In crypto there are **two** major differences however:

1\. Each call contract can equal 1 BTC, however you can also trade mini contracts that are less than 1 BTC. Again, for stocks **1 call contract = 100 shares always**. So, knowing how contracts are sized in different markets is important.

2\. Most crypto exchanges will be cash settled. So, you will never be forced to actually buy the BTC/asset shares at expiration (like you are in the stock market). Rather, the exchange will settle the differences and net you out the profit (or loss) on the trade.

Per their definition, **put options** give the buyer the right, but not the obligation, to sell an asset at a strike price that the buyer selected, anytime up until the option's expiration date. This is advantageous because the buyer of the put option can potentially profit on as a short trade that moves almost 1:1 (dollar for dollar) as the asset falls (making you profit). Think of it like car insurance.

## Buying vs Selling Options

You can either buy or sell, both calls or put options. Buying **calls** is a long strategy on an asset. Buying **puts** is a short strategy on an asset. When you trade these the opposite direction (buying vs selling), they simply change to the opposite directional bias. Example: if you are “selling” **calls** you are now making a **bearish bet**. And when you are “selling” **puts** you are making a **bullish bet**.

• **Buying a Call = DEBIT** to your account. Taking a bet, the asset will go above your strike price in exchange for PAYING the premium asked – **BULLISH**

• **Selling a Call = CREDIT** to your account. Taking a bet, the asset will go below your strike price in exchange you RECEIVE the premium instead – **BEARISH**

• **Buying a Put = DEBIT** to your account. Taking a bet, the asset will go below your strike price, in exchange you PAY the premium asked – **BEARISH**

• **Selling a Put = CREDIT** to your account. Taking a bet, the asset will go above your strike price, in exchange you RECEIVE the premium instead – **BULLISH**

This might seem confusing at first, but it becomes easier with repetition and practice. There must be a buyer or seller on the opposite end of all option trade. If you are buying and they are selling the same option type that each would have the exact opposite outlook and directional bias. I will occasionally update my content with images and videos in the future to drive this concept in more.

![](/images/2022/07/Options-.png)

## Creating a Basic Options Trade Plan.

Things you need to have in mind BEFORE you execute an options trade:

1\. What is the ‘underlying’ asset you are trading? (BTC, SPX, SPY, etc.)

2\. Will you be using calls or puts?

3\. What is the strike price are you plan to select?

4\. What is the expiration date for your option you are planning to go with?

5\. How much is the option contracts Premium? Are you paying or receiving the premium? (i.e. will you be buying or selling the options?)

6\. Is the exchange American style or European style? (Most crypto options are European, while US stocks are American)

7\. Is the trade physically settled or cash settled? (Most crypto exchanges will be cash settled, and most stocks you trade will be physically settled. Some are not, for example SPX trades are cash settled because you cannot own 'shares' of an index)

Every time you decide to make an options trade you should go over these 7 details in your trade plan.

If you are trading crypto options, the most essential thing before putting on your trade is making sure you understand the difference between cash settled and physically settled (point #6) and the difference between American style and European style (point #7). There will be additional posts in the future covering this in greater detail.

## Basic Options Definitions.

Let’s go over a few of the main definitions now:

### Strike Price

The strike price is the price of the asset in which the trader has chosen before entering the trade. The trader is either hoping the assets price climbs either above or below their selected “strike price” before expiration for them to make a profit. The strike price is a fixed price at which the asset of the option can be purchased or sold on expiration or before. Again, in cash settled exchanges you don’t take possession of the asset at expiration, they just net you out either a profit (win) to keep or a debit (loss) to pay.

### Expiration Date

The expiration date is the date that the bet (trade) ends. It is a chosen and carefully selected date by the trader, that he makes before entering the trade. This expiration date is the last day in which the option can be exercised or closed. After an option expires, the trade is over, and the trader simply moves on and starts evaluating their next trade.

As per the definition, European style options cannot be exercised before the expiration date. However, exchanges like FTX do offer alternatives to closing the trade other than just through the exercising of the option on expiration day. You can close the trade and FTX will simple pay you the netted profits just as if you had to take possession (assignment) of the asset at the discounted price (your strike price) and then sell it at the current higher value. They just pay you the profits instead or deduct your losses. Getting back into crypto trading after a year this was the one thing that even caught me off guard for a couple days, especially since I was trading on Interactive Brokers. So, make sure to take note of what style your exchange trades in and how they settle (cash or physical). Not all crypto exchanges are the same.

### Premium

The premium (current price of the option) is what the trader either pays or receives for making the trade. It is either a credit or a debit to the trader. When I buy my calls on BTC, I am “paying” the premium price asked, for the right to enter the trade (aka bet). When I sell my SPX options on the income trades, the premium is what I RECEIVE for taking the option trade and SELLING them.

Know that as the options get closer to expiration their time value starts to lessen and decay. Meaning the premium is reducing in price overtime. This is a good for the option seller as they become more profitable as the time value erodes. They also earn money if price action is not moving fast enough. It is bad for the option buyer as the more the premium erodes, meaning he can only get less and less for the option if he decides to close the trade.

So essentially the ‘option buyer’ is hoping that price climbs faster than the time value of the option erodes. And the ‘option seller’ is hoping that the time value erodes faster than price moves.

### Intrinsic Value (or Time Value)

The other main factor that effects an options price is its intrinsic value. Which is the value the option has according to how far below or above the strike price that the asset has moved. A long call buyer for example is betting that an options intrinsic value (movement of the asset) climbs faster than its time value is eroding. If this happens you can be profitable WITHOUT the asset ever going over your strike price!! And it can happen way before expiration as well. This is normally when I close our early before expiration at take profits.

Now if this intrinsic value (or time value) has you confused, know that we have an entire channel dedicated to going over these two subjects (posted soon, reference channel when posted). Also know that it does not change the fact ever that if the assets price moved is in the direction of your bias and ends up above or below your strike price you chose at expiration, you will always be profitable. Then time value doesn’t matter at that point.

### Implied Volatility & ‘The Greeks’

Another factor that influences an options price both before you trade it and while in the trade is VOLATILITY. Implied volatility to be specific (not historical).The change of the premium price of an option in comparison to the change in the price of the asset is called its "Delta". Delta is a part of what we call the “Greeks”, which is generally the hardest concept to understand when it comes to options for beginners. I will be working on additional posts that will cover the greeks in more detail.

## Summary

When you are a "Buyer of options, your maximum profit potential is unlimited, and your max risk is the amount of premium you paid for the option (be it call or put). When you are a “Seller” of options, the maximum profit on a short option (be it call or put) is limited to the premium received for shorting the asset, no matter what the assets price action may do. The risk can be unlimited without any trade management. This is how I know how much profit I can potentially make each day before I place my SPX income trades as a “seller” of options.

Options provide ways to leverage, manage, and protect trades in ways that no other trading instruments can accomplish. The benefits to taking the time to truly understand this way of trading could dramatically impact your results for your entire trading career. Options are not going anywhere. It is simply the next level once you realize extreme leverage trading on exchanges like Bitmex are structured HEAVILY against you. It solves every single type of trade situation you can imagine or get yourself into.

Options are contracts between two people with opposite bias. It brings them together to creates and accomplish a “bet” between the two parties. They can be used to leverage long or short positions or simply to hedge existing asset positions. In their most mature form, they can create consistent income for the trader that chooses to master them.

For additional resources, check out [Investopedia's resources](https://www.investopedia.com/options-basics-tutorial-4583012) on options trading.

Trading this way has put food on my table for the last 6 years. Take it from me, this is what you want to spend your time learning if you want to get serious and your goal is to become the best trader you can possibly be. There is simply no trading instrument more powerful than options.