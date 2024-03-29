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
      type: "string",
      keyword: true
    },
    isolateId: {
      title: "Isolate Id",
      type: "string",
      keyword: true,
      index: true
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
      type: ["string", "null"],
      enum: [null, "", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "ARPA", "AS", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BM", "BN", "BO", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CS", "CU", "CV", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EDU", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "FX", "GA", "GB", "GD", "GE", "GF", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IO", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NT", "NU", "NZ", "OM", "ORG", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PT", "PW", "PY", "QA", "RE", "RO", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SU", "SV", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TM", "TN", "TO", "TP", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UK", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "YU", "ZA", "ZM", "ZR", "ZW"],
      enumNames: ["", "", "Andorra", "United Arab Emirates", "Afghanistan", "Antigua and Barbuda", "Anguilla", "Albania", "Armenia", "Netherlands Antilles", "Angola", "Antarctica", "Argentina", "Old style Arpanet", "American Samoa", "Austria", "Australia", "Aruba", "Azerbaidjan", "Bosnia-Herzegovina", "Barbados", "Bangladesh", "Belgium", "Burkina Faso", "Bulgaria", "Bahrain", "Burundi", "Benin", "Bermuda", "Brunei Darussalam", "Bolivia", "Brazil", "Bahamas", "Bhutan", "Bouvet Island", "Botswana", "Belarus", "Belize", "Canada", "Cocos (Keeling) Islands", "Central African Republic", "Congo", "Switzerland", "Ivory Coast (Cote D'Ivoire)", "Cook Islands", "Chile", "Cameroon", "China", "Colombia", "Costa Rica", "Former Czechoslovakia", "Cuba", "Cape Verde", "Christmas Island", "Cyprus", "Czech Republic", "Germany", "Djibouti", "Denmark", "Dominica", "Dominican Republic", "Algeria", "Ecuador", "USA Educational", "Estonia", "Egypt", "Western Sahara", "Eritrea", "Spain", "Ethiopia", "Finland", "Fiji", "Falkland Islands", "Micronesia", "Faroe Islands", "France", "France (European Territory)", "Gabon", "Great Britain", "Grenada", "Georgia", "French Guyana", "Ghana", "Gibraltar", "Greenland", "Gambia", "Guinea", "Guadeloupe (French)", "Equatorial Guinea", "Greece", "S. Georgia & S. Sandwich Isls.", "Guatemala", "Guam (USA)", "Guinea Bissau", "Guyana", "Hong Kong", "Heard and McDonald Islands", "Honduras", "Croatia", "Haiti", "Hungary", "Indonesia", "Ireland", "Israel", "India", "British Indian Ocean Territory", "Iraq", "Iran", "Iceland", "Italy", "Jamaica", "Jordan", "Japan", "Kenya", "Kyrgyzstan", "Cambodia", "Kiribati", "Comoros", "Saint Kitts & Nevis Anguilla", "North Korea", "South Korea", "Kuwait", "Cayman Islands", "Kazakhstan", "Laos", "Lebanon", "Saint Lucia", "Liechtenstein", "Sri Lanka", "Liberia", "Lesotho", "Lithuania", "Luxembourg", "Latvia", "Libya", "Morocco", "Monaco", "Moldavia", "Madagascar", "Marshall Islands", "Macedonia", "Mali", "Myanmar", "Mongolia", "Macau", "Northern Mariana Islands", "Martinique (French)", "Mauritania", "Montserrat", "Malta", "Mauritius", "Maldives", "Malawi", "Mexico", "Malaysia", "Mozambique", "Namibia", "New Caledonia (French)", "Niger", "Norfolk Island", "Nigeria", "Nicaragua", "Netherlands", "Norway", "Nepal", "Nauru", "Neutral Zone", "Niue", "New Zealand", "Oman", "Non-Profit Making Organisations (sic)", "Panama", "Peru", "Polynesia (French)", "Papua New Guinea", "Philippines", "Pakistan", "Poland", "Saint Pierre and Miquelon", "Pitcairn Island", "Puerto Rico", "Portugal", "Palau", "Paraguay", "Qatar", "Reunion (French)", "Romania", "Russian Federation", "Rwanda", "Saudi Arabia", "Solomon Islands", "Seychelles", "Sudan", "Sweden", "Singapore", "Saint Helena", "Slovenia", "Svalbard and Jan Mayen Islands", "Slovak Republic", "Sierra Leone", "San Marino", "Senegal", "Somalia", "Suriname", "Saint Tome (Sao Tome) and Principe", "Former USSR", "El Salvador", "Syria", "Swaziland", "Turks and Caicos Islands", "Chad", "French Southern Territories", "Togo", "Thailand", "Tadjikistan", "Tokelau", "Turkmenistan", "Tunisia", "Tonga", "East Timor", "Turkey", "Trinidad and Tobago", "Tuvalu", "Taiwan", "Tanzania", "Ukraine", "Uganda", "United Kingdom", "USA Minor Outlying Islands", "United States", "Uruguay", "Uzbekistan", "Vatican City State", "Saint Vincent & Grenadines", "Venezuela", "Virgin Islands (British)", "Virgin Islands (USA)", "Vietnam", "Vanuatu", "Wallis and Futuna Islands", "Samoa", "Yemen", "Mayotte", "Yugoslavia", "South Africa", "Zambia", "Zaire", "Zimbabwe"],
      useSynonyms: true
    },
    cityIsolate: {
      title: "City Isolate",
      type: ["string", "null"]
    },
    longitudeIsolate: {
      title: "Isolate longitude",
      type: "number",
      minimum: -180,
      maximum: 180
    },
    latitudeIsolate: {
      title: "Isolate latitude",
      type: "number",
      minimum: -90,
      maximum: 90
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