const groupSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/group.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    name: {
      type: "string",
      unique: true
    },
    annotation: {
      type: "string"
    },
    searchQuery: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["sequence", "protein-variant", "dna-variant"]
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
        }
      }
    },
    searchHash: {
      type: "string"
    }
  },
  required: ["name", "annotation"]
};

export default groupSchema;
