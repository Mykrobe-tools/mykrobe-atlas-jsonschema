"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.definitions = undefined;

var _experimentResultPredictor = require("./experiment-result-predictor");

var _experimentResultDistance = require("./experiment-result-distance");

var _experimentResultCluster = require("./experiment-result-cluster");

var definitions = {
  PredictorResult: _experimentResultPredictor.PredictorResult,
  DistanceResult: _experimentResultDistance.DistanceResult,
  ClusterResult: _experimentResultCluster.ClusterResult
};

exports.definitions = definitions;