# Sample Use Case

**An Example of What's Possible with Intempt Platform**

In this guide, we use an example of a hotel booking process and restaurant experience to illustrate how a company could use the Intempt SDK to integrate the User Personalization ability into their application. The UX case study aims to serve as a reference for developers and create a faster and smoother implementation of the Intempt SDK with the application.


## Acquisition & Conversion Workflow


### Workflow 1: Interaction

**User:**  Customer (let’s call him John) is planning his trip to Berlin. He compares prices between hotels and arrives at a “5 Star Hotel” booking site where he finds a suitable room to stay. John signs up, but he is hesitant to make the reservation because of the price and also he is not sure if the hotel’s restaurant will provide him with vegan catering options. He decides to call the Hotel Staff to provide more information about the prices and the restaurant.

**Hotel:** Staff answers his call and registers John in their CRM, attaching a tag to his profile “Price Sensitive”  and “Vegan Option.”

**Intempt Platform:** collects the User data from the web booking site and CRM, identifies the client and unifies his data. The User’s actions are assigned to these events: “Signed up but abandoned booking,” “Called the Hotel,” “Price Sensitive” and  “Vegan Option.”

![img](image38.jpg)

### Workflow 2: Win Back Customer

**Intempt Platform:** After three days a campaign is triggered to send emails with special offers. It is sent to those clients who are in a “Abandoned booking due price” segment (combines 3 events: “Signed up but abandoned booking” and “Called the Hotel”, “Price Sensitive”, timeframe: 3 days).

![img](image39.jpg)

### Workflow 3: Customer Acquisition

**User:** John receives the email with a discount code to finish the booking he abandoned. He decides to move on, checks the SPA services, but decides to settle with the room reservation.

**Intempt Platform:** collects the reservation data (event “Booking made”) and links John’s on-site behavior to the “Interest in SPA” event.

![img](image40.jpg)

## Conversion & Cross-Sell Workflow

### Workflow 4: Incentive Offer

**User:** Arrives at the hotel and is greeted by the receptionist.

**Intempt Platform:** After check-in, the campaign is triggered based on the  “SPA offer” segment (events: “Booking made”, “Price Sensitive”, Interest in SPA”).

**Hotel:** Through CRM, receptionist receives the automatically triggered message to offer John a 50 EUR SPA voucher for any selected services.

**User:** John selects Thai massage and pays 60 EUR extra (combined with the voucher) to get the service he was initially interested in.

![img](image41.jpg)

### Workflow 5: Download App and Log In

**Hotel:** After check-in, the receptionist encourages John to download the hotel’s mobile app to make a table reservation for dinner at the restaurant.

**User:** John downloads the iOS app, signs in and makes the restaurant reservation.

**Intempt Platform:** Login Identifier stitches the User profile between the Web and iOS app, John’s past behavior falls into “Vegan” segment.

![img](image42.jpg)

## Retention & Refferal Workflow

### Workflow 6: Personalized Dining Experience

**User:** Enters the restaurant and takes his seat.

**Intempt Platform:** “Entry to restaurant” event is captured by a beacon. It communicates with the iOS app that is installed on John's smartphone. The smart device sends an ID number to the cloud service and the server combines John’s location with his behavioral data. The server pushes information to the CRM.

**Restaurant:** Waiter receives a CRM message to approach the customer and present him a special “Vegan menu”.

![img](image43.jpg)

### Workflow 7: Social Action Rewards

**User:** After John finishes the meal and leaves a positive review in the app (evidenced by a 5* review in the app).

**Intempt Platform:** collects the review data and assigns John to “5 Star Review” segment. A complimentary appetizer offer is triggered.

**Restaurant:** Waiter receives CRM notification to offer John a complimentary appetizer on his next visit.

![img](image44.jpg)

### Workflow 8: Personalized Customer Retention Strategy

**User:**  John is delighted with a personalized experience at the “5 Star Hotel” and it’s restaurant. He is ready to book another reservation next time. The process repeats itself.

## Use Case Explained

**Understanding Web and iOS Activity in a Single View**

One of the innovations of Intempt is that the Web User and the iOS App User shown above typically are difficult to see as a single continuous User.

Moreover, anonymous activity (no login) is challenging to see as a continuous activity with the logged-in User. This problem is compounded when you have two different applications, so you end up managing up-to-four (in this case) activity streams that really belong to one User activity stream. At Intempt, we have a Customer Data Platform that syncs and merges the User profile across devices and identifiers.
Segmentation for personalized orchestration across your customers’ experience.

As you can imagine, your Users are in various stages. Some have made a reservation but haven’t ordered yet. Others have ordered multiple times but still haven’t reviewed or shared their experience. A number of them have been to many events and are loyal advocates of your brand.

Finally, apart from behavior, some Users have different demographics. We don’t just mean gender and age; we assume they’re a food critic, a chef, a vegan, or a client with a stated preference for privacy and non-smoking.

![img](image17.png)

**Segmentation process**

All of this information can be used to segment the User flexibly and deeply. Data from iOS, Web, Servers, Beacons (in a restaurant) can be gathered and Intempt provides a UI/UX to micro-segment your User base.
