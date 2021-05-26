const PredictorResult = {
  type: "object",
  title: "Predictor",
  properties: {
    susceptibility: {
      title: "Susceptibility",
      type: "object",
      properties: {
        Ofloxacin: {
          title: "Ofloxacin",
          type: "object",
          properties: {
            prediction: {
              title: "Prediction",
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Moxifloxacin: {
          title: "Moxifloxacin",
          type: "object",
          properties: {
            prediction: {
              title: "Prediction",
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Isoniazid: {
          title: "Isoniazid",
          type: "object",
          properties: {
            prediction: {
              title: "Prediction",
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Kanamycin: {
          title: "Kanamycin",
          type: "object",
          properties: {
            prediction: {
              title: "Prediction",
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Ethambutol: {
          title: "Ethambutol",
          type: "object",
          properties: {
            prediction: {
              title: "Prediction",
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Streptomycin: {
          title: "Streptomycin",
          type: "object",
          properties: {
            prediction: {
              title: "Prediction",
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Ciprofloxacin: {
          title: "Ciprofloxacin",
          type: "object",
          properties: {
            prediction: {
              title: "Prediction",
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Pyrazinamide: {
          title: "Pyrazinamide",
          type: "object",
          properties: {
            prediction: {
              title: "Prediction",
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Rifampicin: {
          title: "Rifampicin",
          type: "object",
          properties: {
            prediction: {
              title: "Prediction",
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Amikacin: {
          title: "Amikacin",
          type: "object",
          properties: {
            prediction: {
              title: "Prediction",
              type: "string",
              enum: ["R", "S"]
            }
          }
        },
        Capreomycin: {
          title: "Capreomycin",
          type: "object",
          properties: {
            prediction: {
              title: "Prediction",
              type: "string",
              enum: ["R", "S"]
            }
          }
        }
      }
    },
    r: {
      title: "Resistant",
      type: "boolean",
      synonyms: ["true => Resistant"]
    },
    mdr: {
      title: "MDR",
      type: "boolean",
      synonyms: ["true => MDR"]
    },
    xdr: {
      title: "XDR",
      type: "boolean",
      synonyms: ["true => XDR"]
    },
    tdr: {
      title: "TDR",
      type: "boolean",
      synonyms: ["true => TDR"]
    },
    type: {
      title: "Type",
      type: "string",
      enum: ["predictor"]
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

export { PredictorResult };
