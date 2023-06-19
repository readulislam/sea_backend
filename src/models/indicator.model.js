const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef Indicator
 */
const Indicator = sequelize.define(
  "Indicator",
  {
    theme_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "theme",
        key: "id",
      },
    },
    subtheme_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "subtheme",
        key: "id",
      },
    },
    name_short_pt: {
      type: DataTypes.STRING,
    },
    name_short_en: {
      type: DataTypes.STRING,
    },
    name_long_pt: {
      type: DataTypes.STRING,
    },
    name_long_en: {
      type: DataTypes.STRING,
    },
    description_pt: {
      type: DataTypes.STRING,
    },
    description_en: {
      type: DataTypes.STRING,
    },
    comments_pt: {
      type: DataTypes.STRING,
    },
    comments_en: {
      type: DataTypes.STRING,
    },
    source_pt: {
      type: DataTypes.STRING,
    },
    source_en: {
      type: DataTypes.STRING,
    },
    entity_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "entity",
        key: "id",
      },
    },
    entity_code: {
      type: DataTypes.STRING,
    },
    first_period_available: {
      type: DataTypes.STRING,
    },
    last_period_available: {
      type: DataTypes.STRING,
    },
    last_update: {
      type: DataTypes.STRING,
    },
    periodicity_type: {
      type: DataTypes.STRING,
    },
    upload_type: {
      type: DataTypes.STRING,
    },
    unit_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "unit",
        key: "id",
      },
    },
    power_10: {
      type: DataTypes.STRING,
    },
    decimal_precision: {
      type: DataTypes.STRING,
    },
    dashboard_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "dashboard",
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
    tableName: "indicator",
    schema: "seamind_data",
  }
);
sequelizeTransforms(Indicator);

module.exports = Indicator;
