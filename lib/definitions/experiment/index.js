"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.definitions = undefined;

var _experimentOrganisation = require("./experiment-organisation");

var _experimentMetadata = require("./experiment-metadata");

var _experimentResistance = require("./experiment-resistance");

var _experimentSusceptibility = require("./experiment-susceptibility");

var _experimentDrugPhase = require("./experiment-drug-phase");

var _experimentMetadataPatient = require("./experiment-metadata-patient");

var _experimentMetadataSample = require("./experiment-metadata-sample");

var _experimentMetadataGenotyping = require("./experiment-metadata-genotyping");

var _experimentMetadataPhenotyping = require("./experiment-metadata-phenotyping");

var _experimentMetadataTreatment = require("./experiment-metadata-treatment");

var _experimentMetadataOutcome = require("./experiment-metadata-outcome");

var _experimentResult = require("./experiment-result");

var definitions = {
  Organisation: _experimentOrganisation.Organisation,
  Metadata: _experimentMetadata.Metadata,
  Resistance: _experimentResistance.Resistance,
  Susceptibility: _experimentSusceptibility.Susceptibility,
  DrugPhase: _experimentDrugPhase.DrugPhase,
  Patient: _experimentMetadataPatient.Patient,
  Sample: _experimentMetadataSample.Sample,
  Genotyping: _experimentMetadataGenotyping.Genotyping,
  Phenotyping: _experimentMetadataPhenotyping.Phenotyping,
  Treatment: _experimentMetadataTreatment.Treatment,
  Outcome: _experimentMetadataOutcome.Outcome,
  Result: _experimentResult.Result
};

exports.definitions = definitions;