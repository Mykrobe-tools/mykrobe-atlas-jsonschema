import { definitions } from "./definitions/experiment";
import { definitions as searchDefinitions } from "./definitions/search";

const experimentSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/experiment.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  definitions,
  searchDefinitions,
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

export default experimentSchema;
