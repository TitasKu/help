# Segments

## Overview ##

A segment in Intempt Platform is a group of users whose actions taken, actions not taken, or user profile properties match a set of criteria you’ve defined.
For example, a segment can be users who visited a website for the first time in the past 30 days. A more complex segment could be users who live in San Francisco, were acquired via an Instagram campaign in May, purchased 3 or more times from January till April.
Once you’ve identified your target segments, you can create them and start mapping your segments to the corresponding campaigns. You can also analyze segments over time to understand how a segment behaves in response to your marketing initiatives.

## How to Create a Segment ##

Go to Audience Management and select Segments. Click on “Create a Segment”

![img](image31.png)

Type the name of the segment and select corresponding filters.

![img](image31a.png)

Pick Has Done/Has Not Done/Count of/ Profile for an event that has or has not occurred, or is countable.

![img](image32.png)

Select associated event type.

![img](image33.png)

Choose an appropriate date range.

![img](image34.png)

Choose AND or OR to chain the events.

![img](image35.png)

Click “Save” to create the segment.

![img](image36.jpg)

## Example Segment ##

For this example we’ll use the “Shopping Cart Abandoners” segment.
“Shopping Cart Abandoners” are users who had items in their shopping cart but did not make a purchase. So we define this segment by [Add to Cart] event “Has done” AND [Purchase] event equals '0'.

This is how the segment looks fully configured in Intempt Platform.

![img](image37.jpg)

Here are the steps to create the following segment:

Nr. | Steps  | Example|
----| -------| ------ |
1A|Choose Has Done or Has Not Done for an event that has or has not occurred|Has done|
1B| Select  a corresponding event| Added to Cart|
2A|Choose Count Of for an Event that needs to be counted|Count of
2B|Select a corresponding event|Purchase
2C|Choose  equals/ does not equal, greater than/ greater than or equal/ less than (only applicable for Count Of event)|Equals
2D|Type the value|“0”
3| Choose a timeframe| Data range -> 2020-05-01,2020-05-07|
4|Choose AND’s and OR’s to chain| AND
5|Save segment| Segment created

## Sample Segment Templates

Segment| Description | Action | Event | Time frame |
------ | ----------- | -------| ------| -----------|
Frequent Buyers|Users who completed at least 5 purchases in the past 6 months|Count of - 5/ greater or equal|Purchase|Date range: 6 months
Shopping Cart Abandoners| Users with items in their shopping carts from previous sessions but without any purchases| Has done [and]Has not done| Added to Cart [and] Purchase|Date range: 7 days
Coupon Lovers| Users who completed a purchase using a coupon|Count of [and]Has done|Purchase [and]Coupon Used|Date range: 30 days
Bargain Hunters|Users who are on the lookout for the best available deals|Has done [and] Has done|Category Sorting: Price: Low to High[and] Page visited ‘/on-sale/ |Date range: 6 months
One-time shoppers|Single session users who completed a purchase|Count of 1/ greater or equal [and]Count of 1/ equals|Purchase [and] Session per user | Date range: 6 months
