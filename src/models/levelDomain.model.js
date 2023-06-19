const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef LevelDomain
 */
const LevelDomain = sequelize.define(
  "LevelDomain",
  {
    level_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "level",
        key: "id",
      },
    },
    domain_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "level_domain",
        key: "id",
      },
    },
    name_pt:{type:DataTypes.STRING},
    name_en:{type:DataTypes.STRING},
    entity_code:{type:DataTypes.STRING},
    geom:{type:DataTypes.STRING},

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
    tableName: "level_domain",
    schema: "seamind_data",
  }
);
sequelizeTransforms(LevelDomain);

module.exports = LevelDomain;
