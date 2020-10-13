"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var groupSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/group.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    name: {
      type: "string"
    },
    annotation: {
      type: "string"
    }
  }
};

exports.default = groupSchema;