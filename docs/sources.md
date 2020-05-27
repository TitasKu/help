# Sources

## Overview
Sources serve as a medium of getting valuable User behavior data and can be used to power all sorts of actions, that increase user acquisition, conversion, retention and drive growth in your business.

Sources represent integrations of Intempt Platform with one of supported platforms (Shopify, HubSpot, Magento, POS system, etc.) or client's website/mobile app. You can find all the sources listed at https://app.intempt.com under Customer Data Platform -> Sources.

Sources can be picked from below listed categories:
1. 	**Intempt Web Tracker** - for tracking all data flowing through your website.
2. 	**iOS App** - for tracking all data flowing through your iOS Application.
3. 	**API Source** - for creating collections, relations, identifiers, etc. from scratch as they are created by default in the other two sources for you.

## Types of Data Sources

Data source   | How it works  | Data collected|
------ | -------- | ---------- |
Web/mobile|Any web page/mobile application with Intempt tracker installed|Products, categories and pages browsed, clicks, store, interaction data, number of pages/sessions
Server to server|Integrate communications directly from your servers|Track any data collected
Beacons|Beacons communicate with nearby smart devices, which send information to linked servers|Entry/ exit, time spent in physical space
Sales apps|Ecommerce, administration and sales systems that manage sales interactions (e.g. Magento, Shopify, Prestashop)|Purchases, orders, customer and product value, abandoned baskets, returns
Marketing apps|Services that help to target markets and convert leads into sales (e.g. Google Analytics, Mailchimp, Drip, Hootsuite)|User interactions, visitor and session statistics, engagement metrics

## Creating a Source

With Intempt Platform you can create a source for each Website/App/CRM/Beacon you want to track.

In order to add a new data source, first you need to add a tracker to it. Go to “Customer Data Platform”, select “Create source”.

![img](image23.png)

Give your tracker a title, a description (optional), and select source type “API Source” or “Intempt Web Tracker”.

![img](image24.png)

Once the tracker is created, simply copy and paste the tracker code into your website’s header.

![img](image25.png)

For all Sources that are not of Web or iOS, you can directly call the Collections and Relations API to store data.

API Source’s API key should be added directly to the endpoint source to authorize data collection.

![img](image26.png)

For more information on tracker integration, check out dev.intempt.com

## Collections

Collections describe schemas for events or data of a certain type, while collection data items represent specific pieces of data in that collection. To put that in relational terms, collections are tables that describe columns (types, constraints, etc.), and collection data items are rows of values for those columns.

**For example, collections can be created for:**
- User profiles
- Purchases, flight & hotel bookings
- Certain user actions on a website

### Types of collections

On the API end, collections can be of 3 types:

- **Profile Collection**
A profile collection is used to store information pertaining to the user profile. For example, `id`, `first_name`, `last_name`, `address`.

- **Event Collection**
An event collection is used to store information about any event. For example, purchase, flight booking, hotel booking, etc.

- **Attribute Collection**
An attribute collection is used to store information about anything which is neither profile nor event. For example, product ID, product name, price, flight number, luggage allowance etc.
