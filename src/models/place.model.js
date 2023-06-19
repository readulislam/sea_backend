const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { placeTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef Place
 */
const Place = sequelize.define(
  "Place",
  {
    name_pt: {
      type: DataTypes.STRING,
    },
    name_en: {
      type: DataTypes.STRING,
    },
    place_type:{
        type: DataTypes.STRING,
        enum: [
            placeTypes.CITY,
            placeTypes.ISLAND,
            placeTypes.NATIONAL_CAPITAL,
            placeTypes.TOWN,
            placeTypes.VILLAGE,
          ],
      },
    
    // ()
    parish_code: {
      type: DataTypes.STRING,
    },
    parish_name: {
      type: DataTypes.STRING,
    },
    county_name: {
      type: DataTypes.STRING,
    },
    district_name: {
      type: DataTypes.STRING,
    },
    nuts1: {
      type: DataTypes.STRING,
    },
    nuts2: {
      type: DataTypes.STRING,
    },
    nuts3: {
      type: DataTypes.STRING,
    },
    geom: {
      type: DataTypes.STRING,
    },

    created_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    underscored: true,
    timestamps: true,
    tableName: "place",
    schema: "seamind_data",
  }
);
sequelizeTransforms(Place);

module.exports = Place;
