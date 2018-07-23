"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DrugPhase = {
  type: "object",
  title: "Drug Phase",
  properties: {
    start: {
      title: "Date started",
      type: "string",
      format: "date-time"
    },
    stop: {
      title: "Date stopped",
      type: "string",
      format: "date-time"
    }
  }
};

exports.DrugPhase = DrugPhase;