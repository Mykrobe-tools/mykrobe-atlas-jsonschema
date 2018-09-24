"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var userResultSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/search.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    type: {
      type: "string",
      enum: ["sequence", "protein-variant", "dna-variant"]
    },
    result: {
      type: "object"
    },
    bigsi: {
      type: "object",
      properties: {
        seq: {
          type: "string"
        },
        threshold: {
          type: "number"
        },
        ref: {
          type: "string"
        },
        alt: {
          type: "string"
        },
        pos: {
          type: "number"
        },
        gene: {
          type: "string"
        }
      }
    },
    query: {
      type: "object"
    },
    status: {
      type: "string",
      enum: ["complete", "pending"]
    },
    hash: {
      type: "string"
    }
  },
  when: [{
    case: {
      properties: {
        type: { enum: ["sequence"] }
      }
    },
    deepRequired: ["/bigsi/seq", "/bigsi/threshold"]
  }, {
    case: {
      properties: {
        type: { enum: ["protein-variant"] }
      }
    },
    deepRequired: ["/bigsi/ref", "/bigsi/alt", "/bigsi/pos", "/bigsi/gene"]
  }]
};

exports.default = userResultSchema;