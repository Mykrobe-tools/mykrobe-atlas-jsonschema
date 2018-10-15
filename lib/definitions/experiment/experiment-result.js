"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Result = {
  type: "object",
  title: "Result",
  properties: {
    type: {
      title: "Type",
      type: "string",
      enum: ["predictor", "distance", "nearestNeighbours"]
    },
    analysed: {
      title: "Analysed",
      type: "string",
      format: "date-time"
    },
    susceptibility: {
      title: "Susceptibility",
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            title: "Name",
            type: "string",
            enum: ["Isoniazid", "Kanamycin", "Ethambutol", "Streptomycin", "Capreomycin", "Quinolones", "Pyrazinamide", "Rifampicin", "Amikacin"]
          },
          prediction: {
            title: "Prediction",
            type: "string",
            enum: ["R", "S"]
          },
          calledBy: {
            title: "Called by",
            type: "object"
          }
        }
      }
    },
    phylogenetics: {
      title: "Phylogenetics",
      type: "array",
      items: {
        type: "object",
        properties: {
          type: {
            title: "Name",
            type: "string",
            enum: ["complex", "sub-complex", "species", "sub-species"]
          },
          result: {
            title: "Name",
            type: "string"
          },
          percentCoverage: {
            title: "Percent coverage",
            type: "number"
          },
          medianDepth: {
            title: "Median depth",
            type: "number"
          }
        }
      }
    },
    variantCalls: {
      title: "Variant calls",
      type: "object"
    },
    sequenceCalls: {
      title: "Sequence calls",
      type: "object"
    },
    kmer: {
      title: "K-mer",
      type: "number"
    },
    probeSets: {
      title: "Probe sets",
      type: "array",
      items: {
        title: "Probe set",
        type: "string"
      }
    },
    file: {
      title: "Files",
      type: "array",
      items: {
        title: "File",
        type: "string"
      }
    },
    version: {
      title: "Version",
      type: "object"
    },
    genotypeModel: {
      title: "Genotype model",
      type: "string",
      enum: ["median_depth"]
    }
  }
};

exports.Result = Result;