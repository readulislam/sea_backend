const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef Theme
 */
const Theme = sequelize.define(
  "Theme",
  {
    name_pt: {
      type: DataTypes.STRING,
    },
    name_en: {
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
    background_image_link: {
      type: DataTypes.STRING,
    },
    icon_image_link: {
      type: DataTypes.STRING,
    },
    dashboard_id: {
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
    tableName: "theme",
    schema: "seamind_data",
  }
);
sequelizeTransforms(Theme);

module.exports = Theme;
