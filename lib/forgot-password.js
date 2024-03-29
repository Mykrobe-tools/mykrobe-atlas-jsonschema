"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var forgotPasswordSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/forgotPassword.json",
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

exports.default = forgotPasswordSchema;