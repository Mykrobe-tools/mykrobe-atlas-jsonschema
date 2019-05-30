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
    file: {
      type: "string"
    },
    metadata: { $ref: "#/definitions/Metadata" },
    results: {
      type: "object",
      title: "Results",
      properties: {
        predictor: {
          title: "Predictor",
          $ref: "#/definitions/Result"
        },
        "distance-nearest-neighbour": {
          title: "Nearest neighbours",
          $ref: "#/definitions/Result"
        },
        "distance-tree-distance": {
          title: "Tree distance",
          $ref: "#/definitions/Result"
        }
      }
    }
  }
};

exports.default = experimentSchema;