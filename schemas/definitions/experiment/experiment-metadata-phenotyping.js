const Phenotyping = {
  title: "Phenotyping",
  type: "object",
  properties: {
    phenotypeInformationFirstLineDrugs: {
      title: "Phenotype Information First Line Drugs",
      type: "string",
      enum: ["Yes", "No"]
    },
    rifampicin: {
      title: "Rifampicin",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Rifampicin"]
    },
    ethambutol: {
      title: "Ethambutol",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Ethambutol"]
    },
    pyrazinamide: {
      title: "Pyrazinamide",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Pyrazinamide"]
    },
    isoniazid: {
      title: "Isoniazid",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Resistant, Isoniazid"]
    },
    phenotypeInformationOtherDrugs: {
      title: "Phenotype Information Other Drugs",
      type: "string",
      enum: ["Yes", "No"]
    },
    rifabutin: {
      title: "Rifabutin",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Rifabutin"]
    },
    ofloxacin: {
      title: "Ofloxacin",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Ofloxacin"]
    },
    ciprofloxacin: {
      title: "Ciprofloxacin",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Ciprofloxacin"]
    },
    levofloxacin: {
      title: "Levofloxacin",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Levofloxacin"]
    },
    gatifloxacin: {
      title: "Gatifloxacin",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Gatifloxacin"]
    },
    amikacin: {
      title: "Amikacin",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Amikacin"]
    },
    kanamycin: {
      title: "Kanamycin",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Kanamycin"]
    },
    gentamicin: {
      title: "Gentamicin",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Gentamicin"]
    },
    streptomycin: {
      title: "Streptomycin",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Streptomycin"]
    },
    capreomycin: {
      title: "Capreomycin",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Capreomycin"]
    },
    clofazimine: {
      title: "Clofazimine",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Clofazimine"]
    },
    pas: {
      title: "PAS",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, PAS"]
    },
    linezolid: {
      title: "Linezolid",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Linezolid"]
    },
    ethionamide: {
      title: "Ethionamide",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Ethionamide"]
    },
    terizidone: {
      title: "Terizidone",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Terizidone"]
    },
    amoxicilinClavulanate: {
      title: "Amoxicilin/Clavulanate",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Amoxicilin, Clavulanate"]
    },
    thioacetazone: {
      title: "Thioacetazone",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Thioacetazone"]
    },
    imipenem: {
      title: "Imipenem",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Imipenem"]
    },
    meropenem: {
      title: "Meropenem",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Meropenem"]
    },
    clarythromycin: {
      title: "Clarythromycin",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Clarythromycin"]
    },
    highDoseIsoniazid: {
      title: "High-dose Isoniazid",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, High-dose Isoniazid"]
    },
    bedaquiline: {
      title: "Bedaquiline",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Bedaquiline"]
    },
    delamanid: {
      title: "Delamanid",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Delamanid"]
    },
    prothionamide: {
      title: "Prothionamide",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Prothionamide"]
    },
    pretomanid: {
      title: "Pretomanid (PA-824)",
      $ref: "#/definitions/Susceptibility",
      synonyms: ["Susceptibility/Resistant, Pretomanid"]
    }
  }
};

export { Phenotyping };
