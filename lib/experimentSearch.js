"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _experiment = require("./definitions/experiment");

var _search = require("./definitions/search");

var experimentSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/experiment.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  definitions: _experiment.definitions,
  searchDefinitions: _search.definitions,
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
          $ref: "#/searchDefinitions/PredictorResult"
        },
        "distance-nearest-neighbour": {
          title: "Nearest neighbours",
          $ref: "#/searchDefinitions/DistanceResult"
        },
        "distance-tree-distance": {
          title: "Tree distance",
          $ref: "#/searchDefinitions/DistanceResult"
        }
      }
    }
  }
};

exports.default = experimentSchema;