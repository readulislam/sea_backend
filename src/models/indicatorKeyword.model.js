const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef IndicatorKeyword
 */
const IndicatorKeyword = sequelize.define(
  "IndicatorKeyword",
  {
   keyword_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "keyword",
        key: "id",
      },
    },
    indicator_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "indicator",
        key: "id",
      },
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
    tableName: "indicator_keyword",
    schema: "seamind_data",
  }
);
sequelizeTransforms(IndicatorKeyword);

module.exports = IndicatorKeyword;
