const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef IndicatorData
 */
const IndicatorData = sequelize.define(
  "IndicatorData",
  {
    indicator_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "indicator",
        key: "id",
      },
    },
    level_domain_id_idx1: {
      type: DataTypes.STRING,
    },
    level_domain_id_idx2: {
      type: DataTypes.STRING,
    },
    level_domain_id_idx3: {
      type: DataTypes.STRING,
    },
    level_domain_id_idx4: {
      type: DataTypes.STRING,
    },
    level_domain_id_idx5: {
      type: DataTypes.STRING,
    },
    level_domain_id_idx6: {
      type: DataTypes.STRING,
    },
    level_domain_id_idx7: {
      type: DataTypes.STRING,
    },
    level_domain_id_idx8: {
      type: DataTypes.STRING,
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
    tableName: "indicator_data",
    schema: "seamind_data",
  }
);
sequelizeTransforms(IndicatorData);

module.exports = IndicatorData;
