const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef singleboardDimensionLevel
 */
const singleboardDimensionLevel = sequelize.define(
  "singleboardDimensionLevel",
  {
    singleboard_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "singleboard",
        key: "id",
      },
    },
    dimension_level_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "dimension_level",
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
    tableName: "singleboard_dimension_level",
    schema: "seamind_data",
  }
);
sequelizeTransforms(singleboardDimensionLevel);

module.exports = singleboardDimensionLevel;
