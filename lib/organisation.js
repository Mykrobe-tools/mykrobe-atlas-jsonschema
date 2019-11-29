"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var organisationSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/organisation.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    name: {
      type: "string",
      unique: true
    },
    slug: {
      type: "string",
      unique: true
    },
    membersGroupId: {
      type: "string"
    },
    ownersGroupId: {
      type: "string"
    }
  },
  required: ["name"]
};

exports.default = organisationSchema;