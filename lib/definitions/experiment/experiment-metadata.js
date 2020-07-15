"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Metadata = {
  type: "object",
  title: "Metadata",
  properties: {
    sample: {
      $ref: "#/definitions/Sample"
    },
    genotyping: {
      $ref: "#/definitions/Genotyping"
    },
    phenotyping: {
      $ref: "#/definitions/Phenotyping"
    },
    treatment: {
      $ref: "#/definitions/Treatment"
    },
    patient: {
      $ref: "#/definitions/Patient"
    },
    outcome: {
      $ref: "#/definitions/Outcome"
    }
  }
};

exports.Metadata = Metadata;