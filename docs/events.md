# Events

## Overview ##

Events track what individual actions users perform in your app or website. Some examples of events include a user launching an app, viewing a product, signing in, sharing a photo, making a purchase.
Events are recorded by a tracker and can be used to define Segments (groups of users who have all experienced the same events.

## Types of Events ##

There are two types of events in Intempt Platform: Built-in events and Custom events.

Built-in events are events recorded automatically after you integrate our SDK.

Custom events are events you define and track with our SDK or API. You will need to specifically define and pass each Custom Event and their collections from your various platforms

## Custom Events ##

Custom Events are behavioral data points that can define and track users across all data sources. It allows us to understand user behavior and deliver contextually personalized experiences in real-time.

Depending on the type of  business, these events could be anything like:

- Product Page Viewed
- Product Added to Cart
- Subscribed to Newsletter
- Checkout Started | Checkout Completed
- Review Submitted

## Event Properties ##

Events have details that describe the action taking place called properties.
Recording event properties will help you answer questions like which category of products are more popular, and help you segment users based on varied data like referrer, devices or pages viewed.

**Event Properties are classified into 2 categories:**

- System Properties: Tracked for all Built-in Events and Custom Events by default.
- Custom Properties: Tracked only for the Custom Events to which they're attached.

## Creating an Event ##

To create an event, select Audience Management, Events and click “Create Event”.

![img](image27.png)

Enter the name of the event and select the data source, which you have created.

![img](image28.png)

Select an event type and a corresponding property.

![img](image29.png)

## Example Event ##

Let’s create an event named “myEvent”, which has a custom collection “Flight-Booking-Event” (collection data that holds all the data related to flight bookings in the website).

![img](image30.jpg)

Step   | Element  | Description|
------ | -------- | ---------- |
1 | Source | equals myWebSource which we defined in our source
2 | Event type | equals the custom collection we defined earlier
3 | Event property | make a targeted selection (e.g. BookingStatus)
4 | Event property value | type in the value that equals booking event: “booked”
5 | and/or | select the conditional operator that helps to define the event correctly

## Built-in Events and Properties ##

Event type | Property | Filter | Description     | Example |
---------- | -------- | -------| --------------- | :-------: |
Interaction| Type (click, change)| N/A | User typed  a defined text into a content box | company@yourdomain.com
 || HTML element| Tag | User interacted with a defined HTML tag | < button type="submit">Login< /button >
| || Name| Clicked on an element that has “Name” attribute| < Your organization? [INPUT NAME="org" SIZE="20">
| || Href| Clicked on a link| https://www.example.com
| || Class Name | Clicked/interacted with a site content that has a specific class (style) | < div class="container" >
| || Class List | Clicked/interacted with a site content that has a specific class (style) | < h1 class="intro">Header 1< /h1 >
| || ID | Clicked on a site element that has a defined ID | < div id="Sale">Summer Flash Sale< /div>
| || Path | Clicked on an image or file | < img src="picture.jpg" >
| || Text | Clicked on a text element | < p > (paragraph)
| || Value| Clicked on a specific input text | < input type="submit" value="Submit" >
| || Checked | Visitor checked a site element (e.g. checkbox) | < input type="checkbox" id="item" name="item" checked >
Page| Path| N/A | Visited page with a specific page | /catalog/dresses
| |Title| N/A | Visited a page with a specific title| “New Collection”
| |URL | Scheme| Page has a certain URL scheme | http://, https:// or ftp://
| || Host | Page has a defined web address| www.example.com
||| Port| Page has a defined port number|http = 80, https = 443, ftp = 21
|||Path| Exact location of a page| /catalog/ dresses
||| Query| Page contains a query string. Used in search queries, link referrals, product information, user preferences and more.| search?q=query+string
 ||| Fragment| Page has a specific section| /catalog/dresses/#pricing
 Visit| Number of Sessions| N/A| Total number of user’s visits to a site| 26 sessions
 || Referrer| Scheme | Visitor arrived from a page that has a certain url scheme | http://, https:// or ftp://
 || | Host| Visitor arrived from a particular page that has a defined web address | www.example.com
 ||| Port|Visitor arrived from a site that has a defined port number| http = 80, https = 443, ftp = 21
 || |Path| Visitor arrived from a page that has a defined path | /catalog/ dresses|
 || |Query | Visitor arrived from a page that has a specific query string| search?q=query+string
 |||Fragment| Visitor arrived from a page that has a specific section| /catalog/dresses/#pricing
 ||UTM|Source|UTM source of the marketing campaign|google, newsletter
 ||| Medium| UTM campaign type| cpc, banner, email
 |||Term|UTM paid keywords for the marketing campaign| running+shoes
 || |Content| UTM differentiators (ads or links) that point to the same URL| logolink, textlink
 ||| Campaign| UTM name of the marketing campaign that resulted in the occurrence of the event| utm_campaign=spring_sale|
 || Page Url| N/A| The page URL on which the user performed the event| https://www.example.com
 Visitor| Screen| Resolution| Visitor’s screen has specific resolution in pixels| 2560 x 1440
 |||Color Depth|Visitor’s screen color depth|8-bit, 16-bit, 24-bit, 32-bit
 |||Pixel Ratio| Aspect ratio of the screen| 4:3, 16:9
 ||First Seen|NA| Specific time user first visited the page/site| 1:43PM
 ||Timezone|N/A|Visitor’s local timezone|EEST (UTC +3)
 ||Initial Referrer| Scheme| Initial page visitor arrived from a page that has a certain URL scheme|http://, https:// or ftp://
 |||Host|Initial page visitor arrived from a page that has a defined web address|www.example.com
 |||Port|Initial page visitor arrived from a page that has a specific associated port|http = 80, https = 443, ftp = 21
 |||Path|Initial page visitor arrived from that has a defined address path|/catalog/ dresses
 |||Query|Initial page visitor arrived from a page that has a specific query string| search?q=query+string
 |||Fragment|Initial page visitor arrived from a page that has a particular section|/catalog/dresses/#pricing
 ||Landing Page|N/A|The URL of the landing page visitor arrived|https://www.example.com/sales-offer/
 ||Browser|Name|Name of the browser visitor is using|Chrome, Firefox, Explorer
 |||Version|Browser’s version visitor is currently using|Chrome 81.0.4044.138
 ||OS|Name|Operating System of the device|Windows, OS X, Linux
 |||Version|Version of the OS| Windows 10, Mac OS 10.14.6
 ||Device|Name|Name of the device|SM-G928F
 |||Brand| Name of the device brand|Samsung, Apple, Sony
 |||Type|Type of the device|Desktop, mobile, tablet

 ## Sample Event Templates ##

 Event  | Description | Example | Event type | Property | String  |
 ------ | ----------- | --------| ---------- | ---------| --------|
 Searched|Track search for a product| Keyword: Samsung Galaxy| Page with path /catalogsearch/result | Query contains| q=Samsung+Galaxy
 Product viewed| Track viewed products|Product: WH-1000XM3 headphones|Visit of a view with path|N/A|/headband-headphones/wh-1000xm3
 Category Viewed|Track browsed categories|Category: Smart Watches|Visit of a view with path|N/A|/catalog/smart-watches
 Added to Wishlist|Track if product is added to a wishlist for future purchase|Product: iPhone XS|Interaction [and] Visit of a view with path| HTML -> Class name [and] N/A|“action towishlist” [and] /catalog/iphone-xs
 Product Reviewed|Track review of the product|Product: UE Boom 3 Speaker|Interaction [and] Visit of a view with path|HTML -> Class name [and] N/A|“action submit review” [and] /speakers/ue-boom
 Added to Cart|Item added to cart|Product: Panasonic GH5S Camera|Interaction [and] Visit of a view with path|HTML -> Class name [and] N/A| “action primary tocart” [and] /cameras/panasonic-gh5s
 Coupon Used|Track if coupon code is used to complete the purchase| Offer: 20% off all mobile phones; Coupon Code: DISCOUNT20| Interaction [and] Interaction|HTML -> Value [and] Type|“apply discount” [and]“DISCOUNT20”
 Purchase|Track successful purchase|Name: Xootr Cruz Scooter|Custom event collection {Purchase} [and] Page| Equals [and] Title| 1 [and] “Xootr Cruz Scooter”
