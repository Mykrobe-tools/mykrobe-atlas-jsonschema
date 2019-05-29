const searchSchema = {
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
        query: {
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
    },
    expires: {
      type: "string",
      format: "date-time"
    }
  },
  when: [
    {
      case: {
        properties: {
          type: { enum: ["sequence"] }
        }
      },
      deepRequired: ["/bigsi/query/seq", "/bigsi/query/threshold"]
    },
    {
      case: {
        properties: {
          type: { enum: ["dna-variant"] }
        }
      },
      deepRequired: ["/bigsi/query/ref", "/bigsi/query/alt", "/bigsi/query/pos"]
    },
    {
      case: {
        properties: {
          type: { enum: ["protein-variant"] }
        }
      },
      deepRequired: [
        "/bigsi/query/ref",
        "/bigsi/query/alt",
        "/bigsi/query/pos",
        "/bigsi/query/gene"
      ]
    }
  ]
};

export default searchSchema;
