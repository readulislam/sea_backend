const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef IndicatorValueDomain
 */
const IndicatorValueDomain = sequelize.define(
  "IndicatorValueDomain",
  {
    indicator_value_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "indicator_value",
        key: "id",
      },
    },
    level_domain_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "level_domain",
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
    tableName: "indicator_value_domain",
    schema: "seamind_data",
  }
);
sequelizeTransforms(IndicatorValueDomain);

module.exports = IndicatorValueDomain;
