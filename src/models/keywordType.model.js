const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef KeywordType
 */
const KeywordType = sequelize.define(
  "KeywordType",
  {
    name_pt: {
      type: DataTypes.STRING,
    },
    name_en: {
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
    timestamps: true,
    tableName: "keyword_type",
    schema: "seamind_data",
  }
);
sequelizeTransforms(KeywordType);

module.exports = KeywordType;
