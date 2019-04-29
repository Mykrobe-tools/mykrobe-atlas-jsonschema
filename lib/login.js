"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var loginSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/login.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    username: {
      type: "string",
      format: "email"
    },
    password: { type: "string" }
  },
  required: ["username", "password"]
};

exports.default = loginSchema;