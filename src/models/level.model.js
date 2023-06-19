const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes, levelTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef Level
 */
const Level = sequelize.define(
  "Level",
  {
    name_pt: {
      type: DataTypes.STRING,
    },
    name_en: {
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
    level_type: {
      type: DataTypes.STRING,
      enum:[
        levelTypes.ADMINISTATIVE_UNIT,
        levelTypes.LOCATION,
        levelTypes.NUMERIC,
      ]
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
    tableName: "level",
    schema: "seamind_data",
  }
);
sequelizeTransforms(Level);

module.exports = Level;
