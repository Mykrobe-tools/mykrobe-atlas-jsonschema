"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var eventSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/event.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    userId: {
      type: "string"
    },
    openUploads: {
      title: "Open Uploads",
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "string"
          },
          identifier: {
            type: "string"
          },
          chunkNumber: {
            type: "string"
          },
          totalChunks: {
            type: "string"
          },
          chunkSize: {
            type: "integer"
          },
          totalSize: {
            type: "integer"
          },
          filename: {
            type: "string"
          },
          originalFilename: {
            type: "string"
          },
          type: {
            type: "string"
          },
          checksum: {
            type: "string"
          },
          chunkFilename: {
            type: "string"
          },
          complete: {
            type: "boolean"
          },
          verifiedTotalChunks: {
            type: "integer"
          },
          percentageComplete: {
            type: "integer"
          },
          message: {
            type: "string"
          },
          provider: {
            type: "string"
          },
          size: {
            type: "integer"
          },
          fileLocation: {
            type: "string"
          }
        }
      }
    },
    openSearches: {
      title: "Open Searches",
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "string"
          },
          bigsi: {
            type: "object",
            properties: {
              query: {
                type: "object",
                properties: {
                  gene: {
                    type: "string"
                  },
                  ref: {
                    type: "string"
                  },
                  pos: {
                    type: "integer"
                  },
                  alt: {
                    type: "string"
                  }
                }
              }
            }
          },
          type: {
            type: "string"
          },
          status: {
            type: "string"
          },
          expires: {
            type: "string",
            format: "date-time"
          }
        }
      }
    },
    openAnalysis: {
      title: "Open Analysis",
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "string"
          },
          fileLocation: {
            type: "string"
          }
        }
      }
    }
  }
};

exports.default = eventSchema;