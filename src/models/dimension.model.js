const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes, dimensionTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef Dimension
 */
const Dimension = sequelize.define(
  "Dimension",
  {
    name_pt: {
      type: DataTypes.STRING,
    },
    name_en: {
      type: DataTypes.STRING,
    },

    dimension_type: {
      type: DataTypes.STRING,
      enum: [
        dimensionTypes.TEMPORAL,
        dimensionTypes.GEOGRAPHIC,
        dimensionTypes.NUMERIC,
      ],
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
    tableName: "dimension",
    schema: "seamind_data",
  }
);
sequelizeTransforms(Dimension);

module.exports = Dimension;
