const Result = {
  type: "object",
  title: "Result",
  properties: {
    susceptibility: {
      title: "Susceptibility",
      type: "object",
      properties: {
        Ofloxacin: {
          title: "Ofloxacin",
          type: "object",
          properties: {
            title: "Prediction",
            prediction: {
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Moxifloxacin: {
          title: "Moxifloxacin",
          type: "object",
          properties: {
            title: "Prediction",
            prediction: {
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Isoniazid: {
          title: "Isoniazid",
          type: "object",
          properties: {
            title: "Prediction",
            prediction: {
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Kanamycin: {
          title: "Kanamycin",
          type: "object",
          properties: {
            title: "Prediction",
            prediction: {
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Ethambutol: {
          title: "Ethambutol",
          type: "object",
          properties: {
            title: "Prediction",
            prediction: {
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Streptomycin: {
          title: "Streptomycin",
          type: "object",
          properties: {
            title: "Prediction",
            prediction: {
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Ciprofloxacin: {
          title: "Ciprofloxacin",
          type: "object",
          properties: {
            title: "Prediction",
            prediction: {
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Pyrazinamide: {
          title: "Pyrazinamide",
          type: "object",
          properties: {
            title: "Prediction",
            prediction: {
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Rifampicin: {
          title: "Rifampicin",
          type: "object",
          properties: {
            title: "Prediction",
            prediction: {
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Amikacin: {
          title: "Amikacin",
          type: "object",
          properties: {
            title: "Prediction",
            prediction: {
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Capreomycin: {
          title: "Capreomycin",
          type: "object",
          properties: {
            title: "Prediction",
            prediction: {
              type: "string",
              enum: ["R", "S"]
            }
          }
        }
      }
    },
    r: {
      type: "boolean"
    },
    mdr: {
      type: "boolean"
    },
    xdr: { type: "boolean" },
    tdr: { type: "boolean" },
    type: {
      title: "Type",
      type: "string",
      enum: [
        "predictor",
        "distance-tree-distance",
        "distance-nearest-neighbour"
      ]
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
    }
  }
};

export { Result as ResultPredictor };
