const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef SingleboardLevelDomain
 */
const SingleboardLevelDomain = sequelize.define(
  "SingleboardLevelDomain",
  {
    singleboard_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "singleboard",
        key: "id",
      },
    },
    level_domain_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "level_domain",
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
    tableName: "singleboard_level_domain",
    schema: "seamind_data",
  }
);
sequelizeTransforms(SingleboardLevelDomain);

module.exports = SingleboardLevelDomain;
