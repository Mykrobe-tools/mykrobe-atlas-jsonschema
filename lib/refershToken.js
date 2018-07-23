"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var refreshTokenSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/refreshToken.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    refreshToken: {
      type: "string"
    }
  },
  required: ["refreshToken"]
};

exports.default = refreshTokenSchema;