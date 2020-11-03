"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var invitationSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/invitation.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    status: {
      type: "string",
      enum: ["Pending", "Accepted", "Declined"]
    }
  }
};

exports.default = invitationSchema;