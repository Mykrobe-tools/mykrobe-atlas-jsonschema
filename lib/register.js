"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var userSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/user.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  definitions: {},
  properties: {
    firstname: {
      type: "string"
    },
    lastname: {
      type: "string"
    },
    password: {
      type: "string",
      minLength: 1
    },
    phone: {
      type: "string"
    },
    email: {
      type: "string",
      minLength: 1,
      format: "email"
    },
    username: {
      type: "string"
    }
  },
  required: ["username"]
};

exports.default = userSchema;