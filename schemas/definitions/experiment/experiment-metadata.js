const Metadata = {
  type: "object",
  title: "Metadata",
  properties: {
    sample: {
      $ref: "#/definitions/Sample",
    },
    genotyping: {
      $ref: "#/definitions/Genotyping",
    },
    phenotyping: {
      $ref: "#/definitions/Phenotyping",
    },
    treatment: {
      $ref: "#/definitions/Treatment",
    },
    patient: {
      $ref: "#/definitions/Patient",
    },
    outcome: {
      $ref: "#/definitions/Outcome",
    },
  },
};

export { Metadata };
