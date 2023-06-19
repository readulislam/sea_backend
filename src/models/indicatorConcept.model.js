const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef IndicatorConcept
 */
const IndicatorConcept = sequelize.define(
  "IndicatorConcept",
  {
   indicator_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "indicator",
        key: "id",
      },
    },
 concept_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "concept",
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
    tableName: "indicator_concept",
    schema: "seamind_data",
  }
);
sequelizeTransforms(IndicatorConcept);

module.exports = IndicatorConcept;
