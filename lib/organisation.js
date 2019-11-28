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
      type: "string"
    },
    slug: {
      type: "string"
    },
    groupId: {
      type: "string"
    }
  },
  required: ["name", "slug", "groupId"]
};

exports.default = organisationSchema;