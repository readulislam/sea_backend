const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef PolicyObjective
 */
const PolicyObjective = sequelize.define(
  "PolicyObjective",
  {
    policy_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "policy",
        key: "id",
      },
    },

    objective_code: {
      type: DataTypes.STRING,
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
    icon_image_link: {
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
    tableName: "policy_objective",
    schema: "seamind_data",
  }
);
sequelizeTransforms(PolicyObjective);

module.exports = PolicyObjective;
