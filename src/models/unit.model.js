const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef Unit
 */
const Unit = sequelize.define(
  "Unit",
  {
    name_short_pt: {
      type: DataTypes.STRING,
    },
    name_short_en: {
      type: DataTypes.STRING,
    },
    name_long_pt: {
      type: DataTypes.STRING,
    },
    name_long_en: {
      type: DataTypes.STRING,
    },
    description_pt: {
      type: DataTypes.STRING,
    },
    description_en: {
      type: DataTypes.STRING,
    },
    entity_code: {
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
    tableName: "unit",
    schema: "seamind_data",
  }
);
sequelizeTransforms(Unit);

module.exports = Unit;
