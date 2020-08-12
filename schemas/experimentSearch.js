import { definitions } from "./definitions/experiment";
import { definitions as searchDefinitions } from "./definitions/search";

const experimentSearchSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/experimentSearch.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  definitions: {
    Metadata: definitions.Metadata,
    Patient: definitions.Patient,
    Sample: definitions.Sample,
    Genotyping: definitions.Genotyping,
    Phenotyping: definitions.Phenotyping,
    Susceptibility: definitions.Susceptibility,
    Treatment: definitions.Treatment,
    DrugPhase: definitions.DrugPhase,
    Outcome: definitions.Outcome,
    PredictorResult: searchDefinitions.PredictorResult,
    DistanceResult: searchDefinitions.DistanceResult
  },
  properties: {
    sampleId: {
      type: "string"
    },
    leafId: {
      type: "string"
    },
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
          $ref: "#/definitions/PredictorResult"
        },
        "distance-nearest-neighbour": {
          title: "Nearest neighbours",
          $ref: "#/definitions/DistanceResult"
        },
        "distance-tree-distance": {
          title: "Tree distance",
          $ref: "#/definitions/DistanceResult"
        }
      }
    }
  }
};

export default experimentSearchSchema;
