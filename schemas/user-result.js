const userResultSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/user-result.json",
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
  },
  when: [
    {
      case: {
        properties: {
          type: { enum: ["sequence"] }
        }
      },
      deepRequired: ["/query/seq", "/query/threshold"]
    },
    {
      case: {
        properties: {
          type: { enum: ["protein-variant"] }
        }
      },
      deepRequired: ["/query/ref", "/query/alt", "/query/pos", "/query/gene"]
    }
  ]
};

export default userResultSchema;
