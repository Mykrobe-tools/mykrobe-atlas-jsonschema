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
      type: "string",
      unique: true
    },
    annotation: {
      type: "string"
    },
    searchQuery: {
      type: "object"
    }
  },
  required: ["name", "annotation"]
};

exports.default = groupSchema;