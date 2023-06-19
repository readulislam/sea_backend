const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef DimensionLevel
 */
const DimensionLevel = sequelize.define(
  "DimensionLevel",
  {
   dimension_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "dimension",
        key: "id",
      },
    },
   level_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "level",
        key: "id",
      },
    },
   level_number: {
      type: DataTypes.INTEGER,
      references: {
        model: "level",
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
    tableName: "dimension_level",
    schema: "seamind_data",
  }
);
sequelizeTransforms(DimensionLevel);

module.exports = DimensionLevel;
