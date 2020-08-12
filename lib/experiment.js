"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _experiment = require("./definitions/experiment");

var experimentSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/experiment.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  definitions: _experiment.definitions,
  properties: {
    sampleId: {
      type: "string"
    },
    leafId: {
      type: "string"
    },
    file: {
      type: "string"
    },
    metadata: { $ref: "#/definitions/Metadata" },
    results: {
      type: "array",
      title: "Results",
      items: {
        $ref: "#/definitions/Result"
      }
    }
  }
};

exports.default = experimentSchema;