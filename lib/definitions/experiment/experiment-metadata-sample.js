"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Sample = {
  type: "object",
  title: "Sample",
  properties: {
    labId: {
      title: "Lab Id",
      type: "string"
    },
    isolateId: {
      title: "Isolate Id",
      type: "string"
    },
    collectionDate: {
      title: "Collection Date",
      type: "string",
      format: "date"
    },
    prospectiveIsolate: {
      title: "Prospective Isolate",
      type: "string",
      enum: ["Yes", "No"]
    },
    countryIsolate: {
      title: "Country Isolate",
      type: "string",
      enum: ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "ARPA", "AS", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BM", "BN", "BO", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CS", "CU", "CV", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EDU", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "FX", "GA", "GB", "GD", "GE", "GF", "GH", "GI", "GL", "GM", "GN", "GO", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IO", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "MG", "MH", "MI", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NT", "NU", "NZ", "OM", "ORG", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PT", "PW", "PY", "QA", "RE", "RO", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SU", "SV", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TM", "TN", "TO", "TP", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UK", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "YU", "ZA", "ZM", "ZR", "ZW"]
    },
    cityIsolate: {
      title: "City Isolate",
      type: "string"
    },
    dateArrived: {
      title: "Date Arrived",
      type: "string",
      format: "date"
    },
    anatomicalOrigin: {
      title: "Anatomical Origin",
      type: "string",
      enum: ["Respiratory", "Lymph node", "CSF", "Gastric", "Bone", "Other known site", "Non-respiratory, site not known", "Not known"]
    },
    smear: {
      title: "Smear",
      type: "string",
      enum: ["Negative", "+", "++", "+++", "Not known"]
    }
  }
};

exports.Sample = Sample;