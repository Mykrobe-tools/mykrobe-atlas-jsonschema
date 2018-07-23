"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Susceptibility = {
  type: "object",
  title: "Susceptibility",
  properties: {
    susceptibility: {
      title: "Susceptible",
      type: "string",
      enum: ["Sensitive", "Resistant", "Inconclusive", "Not tested"]
    },
    method: {
      title: "Method",
      type: "string",
      enum: ["MGIT", "LJ", "Microtitre plate", "MODS", "Other", "Not known"]
    }
  }
};

exports.Susceptibility = Susceptibility;