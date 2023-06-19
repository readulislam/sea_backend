const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef IndicatorValue
 */
const IndicatorValue = sequelize.define(
  "IndicatorValue",
  {
    indicator_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "indicator",
        key: "id",
      },
    },
    indicator_value: {
      type: DataTypes.STRING,
    },
    indicator_date: {
      type: DataTypes.STRING,
    },
    geom_srid: {
      type: DataTypes.STRING,
    },
    geom_native: {
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
    tableName: "indicator_value",
    schema: "seamind_data",
  }
);
sequelizeTransforms(IndicatorValue);

module.exports = IndicatorValue;
