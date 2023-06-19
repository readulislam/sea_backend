const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef Dashboard
 */
const Dashboard = sequelize.define(
  "Dashboard",
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
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
    thumbnail_image_link: {
      type: DataTypes.STRING,
    },
    main_image_link: {
      type: DataTypes.STRING,
    },
    dashboard_xml: {
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
    tableName: "dashboard",
    schema: "seamind_data",
  }
);
sequelizeTransforms(Dashboard);

module.exports = Dashboard;
