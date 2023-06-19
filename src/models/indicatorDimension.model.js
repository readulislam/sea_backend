const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef IndicatorDimension
 */
const IndicatorDimension = sequelize.define(
  "IndicatorDimension",
  {
    indicator_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "indicator",
        key: "id",
      },
    },
    dimension_index: {
      type: DataTypes.STRING,
    },
    dimension_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "dimension",
        key: "id",
      },
    },
    name_pt: {
      type: DataTypes.STRING,
    },
    name_en: {
      type: DataTypes.STRING,
    },
    comments_pt: {
      type: DataTypes.STRING,
    },
    comments_en: {
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
    tableName: "indicator_dimension",
    schema: "seamind_data",
  }
);
sequelizeTransforms(IndicatorDimension);

module.exports = IndicatorDimension;
