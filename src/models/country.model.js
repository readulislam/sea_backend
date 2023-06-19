const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef Country
 */
const Country = sequelize.define(
  "Country",
  {
      iso2: {
        type: DataTypes.STRING,
      },
    name_pt: {
      type: DataTypes.STRING,
    },
    name_en: {
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
    tableName: "country",
    schema: "seamind_data",
   
  }
);
sequelizeTransforms(Country);

module.exports = Country;
