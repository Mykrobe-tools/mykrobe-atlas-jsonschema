"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var resendNotificationSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/resendNotification.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    email: {
      type: "string",
      format: "email"
    }
  },
  required: ["email"]
};

exports.default = resendNotificationSchema;