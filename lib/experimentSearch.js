"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _experiment = require("./definitions/experiment");

var _search = require("./definitions/search");

var experimentSearchSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/experimentSearch.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  definitions: {
    Metadata: _experiment.definitions.Metadata,
    Patient: _experiment.definitions.Patient,
    Sample: _experiment.definitions.Sample,
    Genotyping: _experiment.definitions.Genotyping,
    Phenotyping: _experiment.definitions.Phenotyping,
    Susceptibility: _experiment.definitions.Susceptibility,
    Treatment: _experiment.definitions.Treatment,
    DrugPhase: _experiment.definitions.DrugPhase,
    Outcome: _experiment.definitions.Outcome,
    PredictorResult: _search.definitions.PredictorResult,
    DistanceResult: _search.definitions.DistanceResult
  },
  properties: {
    sampleId: {
      type: "string"
    },
    leafId: {
      type: "string"
    },
    files: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string"
          },
          uploaded: {
            type: "boolean"
          }
        }
      }
    },
    metadata: { $ref: "#/definitions/Metadata" },
    results: {
      type: "object",
      title: "Results",
      properties: {
        predictor: {
          title: "Predictor",
          $ref: "#/definitions/PredictorResult"
        },
        distance: {
          title: "Distance",
          $ref: "#/definitions/DistanceResult"
        }
      }
    },
    created: {
      type: "string",
      format: "date-time"
    },
    modified: {
      type: "string",
      format: "date-time"
    }
  }
};

exports.default = experimentSearchSchema;