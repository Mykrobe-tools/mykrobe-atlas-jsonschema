import { definitions } from "./definitions/experiment";

const experimentSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/experiment.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  definitions,
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
      type: "array",
      title: "Results",
      items: {
        $ref: "#/definitions/Result"
      }
    }
  }
};

export default experimentSchema;
