"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DistanceResult = {
  type: "object",
  title: "Distance Result",
  properties: {
    type: {
      title: "Type",
      type: "string",
      enum: ["distance-tree-distance", "distance-nearest-neighbour"]
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

exports.DistanceResult = DistanceResult;