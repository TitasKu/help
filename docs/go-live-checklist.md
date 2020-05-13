# Go-Live Checklist

This is a requirements checklist for Intempt Platform clients to check the readiness of their application’s integration with Intempt Platform SDKs. You should confirm that you have followed and implemented these requirements before moving to Production.

## Server Side Checklist ##

Check | Item
----- | -----------
1 | Ensure that you are mapping your SQL/Server store STAR schema correctly to Collections and Relations<ul><li>Your set of Collections and Relations are defined correctly</li><li>Foreign key relationships are correct</li><li>When the data changes at your Server, there is a process in place to sync it back in</li></ul> Ensure that your Server is querying Intempt correctly for Segment relationships <ul><li>Server is calling Segment API using correct nomenclature</li><li>If Server is querying by UserId, ensure the UserId’s being used are correct Identifiers in Intempt</li></ul>
2 | The application is correctly authenticating to Intempt to make requests
3 | Ensure your Production backend servers, databases, and other resources are appropriately secured to call Intempt and send and receive data

## SDK Implementation ##

Check | Item
----- | -----------
1 | The SDK is implemented in your application such that it accesses the Intempt API using keys. You can always reference the key in the Intempt UI.
2 | Sensitive information such as the user's pin, recovery passphrase prefix, financial or health information are not logged or sent to third-party applications in any form. Use intempt.ignore to ensure this.
3 | The SDK is implemented without any modifications as described here:<ul><li>[JS SDK](https://github.com/intempt/intempt-intemptjs)</li><li>[iOS SDK](https://github.com/intempt/intempt-ios-sdk)</li></ul>

## User Experience Checklist ##

Check | Item
----- | -----------
1 | Your application does not initiate a transaction signed by the user’s keys without explicit action from the user within the application.
2 | App analytics systems do not capture interactions of screens with sensitive information such as credit card data or passwords. Generally, application tracking and analytics systems should be configured to avoid capturing sensitive user information. We have this covered in the [Intempt JS](https://github.com/intempt/intempt-intemptjs) and [iOS SDK](https://github.com/intempt/intempt-ios-sdk) using intempt.ignore.

## Security Audit Recommendation ##

**SECURITY AUDIT**

We strongly recommend that your application is reviewed by security assessors/auditors to evaluate the general security of the application and also an analysis of the security vulnerabilities caused by the usage of 3rd party libraries and other dependencies.

**CONTACT US**

Please write to us at [success@intempt.com](mailto:success@intempt.com) if you face any issues fulfilling these requirements.
