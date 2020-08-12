const DistanceResult = {
  type: "object",
  title: "Distance Result",
  properties: {
    type: {
      title: "Type",
      type: "string",
      enum: ["distance"]
    },
    leafId: {
      title: "Leaf Id",
      type: "string"
    },
    subType: {
      title: "SubType",
      type: "string",
      enum: ["tree-distance", "nearest-neighbour"]
    },
    received: {
      title: "Received",
      type: "string",
      format: "date-time"
    },
    analysed: {
      title: "Analysed",
      type: "string",
      format: "date-time"
    },
    experiments: {
      title: "Experiments",
      type: "array",
      items: {
        type: "object"
      }
    }
  }
};

export { DistanceResult };
