const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef Keyword
 */
const Keyword = sequelize.define(
  "Keyword",
  {
    keyword_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    keyword_pt: {
      type: DataTypes.STRING,
    },
    keyword_en: {
      type: DataTypes.STRING,
    },

    policy_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "policy",
        key: "id",
      },
    },
    policy_area_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "policy_area",
        key: "id",
      },
    },
    policy_objective_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "policy_objective",
        key: "id",
      },
    },
    policy_objective_goal_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "policy_objective_goal",
        key: "id",
      },
    },
    entity_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "entity",
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
    tableName: "keyword",
    schema: "seamind_data",
  }
);
sequelizeTransforms(Keyword);

module.exports = Keyword;
