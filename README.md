# Mykrobe Atlas - JSON Schemas #

JSON Schema definitions for the Mykrobe Atlas application.

## Use ##

Import relevant schemas into a project - example using ES6 import

```
import { experiment } from "mykrobe-atlas-jsonschema";
```

## Schemas ##

### Samples

* experiment - a sample to analyse

### Account Management

* forgotPassword - notify the system that a user has forgotten their password and needs a mail sent to reset
* login - authenticate with the system
* resendNotification - resend a registration verification
* resetPassword - reset the users password to a new one
* register - register a new user
* refreshToken - refresh the access token after expiration

### Model

* user - to define a valid user object