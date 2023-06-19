const tokenTypes = {
  ACCESS: "access",
  REFRESH: "refresh",
  RESET_PASSWORD: "resetPassword",
  VERIFY_EMAIL: "verifyEmail",
};

const placeTypes = {
  CITY: "City",
  ISLAND: "Island",
  NATIONAL_CAPITAL: "National Capital",
  TOWN: "Town",
  VILLAGE: "Village",
};
const uploadStatus = {
  SUCCESS: "Success",
  FAILURE: "Failure",
  VERIFIED: "Verified",
};

const representationTypes = {
  TABLE: "Table",
  GRAPH: "Graph",
  AREA: "Area",
  MAP: "Map",
  MARKER_MAP: "Marker Map",
};


const dimensionTypes = {
  TEMPORAL: "Temporal",
  GEOGRAPHIC: "GeoGraphic",
  NUMERIC:"Numeric"
};

const levelTypes={
  ADMINISTATIVE_UNIT:'Administative Unit',
  LOCATION:'Location',
  NUMERIC:'Numeric'
}

module.exports = {
  tokenTypes,
  placeTypes,
  uploadStatus,
  representationTypes,
  dimensionTypes,
  levelTypes
};


