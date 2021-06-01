"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Genotyping = {
  title: "Genotyping",
  type: "object",
  properties: {
    wgsPlatform: {
      title: "WGS Platform",
      type: "string",
      enum: ["HiSeq", "MiSeq", "NextSeq", "Other"]
    },
    wgsPlatformOther: {
      title: "WGS Platform Other",
      type: "string"
    },
    otherGenotypeInformation: {
      title: "Other Genotype Information",
      type: "string",
      enum: ["Yes", "No"]
    },
    genexpert: {
      title: "Genexpert",
      type: "string",
      enum: ["RIF sensitive", "RIF resistant", "RIF inconclusive", "Not tested"],
      synonyms: ["RIF resistant, RIF, Rifampicin"]
    },
    hain: {
      title: "HAIN",
      type: "string",
      enum: ["INH/RIF test", "Fluoroquinolone/aminoglycoside/ethambutol test", "Both", "Not tested"]
    },
    hainRif: {
      title: "HAIN RIF",
      type: "string",
      enum: ["RIF sensitive", "RIF resistant", "RIF inconclusive", "Not tested"],
      synonyms: ["RIF resistant, RIF, Rifampicin"]
    },
    hainInh: {
      title: "HAIN INH",
      type: "string",
      enum: ["INH sensitive", "INH resistant", "INH inconclusive", "Not tested"],
      synonyms: ["INH resistant , INH, Isoniazid"]
    },
    hainFl: {
      title: "HAIN FL",
      type: "string",
      enum: ["FL sensitive", "FL resistant", "FL inconclusive", "Not tested"],
      synonyms: ["FL resistant , FL, Fluoroquinolone, Ciprofloxacin, Moxifloxacin, Levofloxacin, Ofloxacin"]
    },
    hainAm: {
      title: "HAIN AM",
      type: "string",
      enum: ["AM sensitive", "AM resistant", "AM inconclusive", "Not tested"],
      synonyms: ["AM resistant , AM, Aminoglycoside, Gentamicin, Amikacin, Kanamycin, Streptomycin"]
    },
    hainEth: {
      title: "HAIN ETH",
      type: "string",
      enum: ["ETH sensitive", "ETH resistant", "ETH inconclusive", "Not tested"],
      synonyms: ["ETH resistant , ETH, Ethambutol"]
    }
  }
};

exports.Genotyping = Genotyping;