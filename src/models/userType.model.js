const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef UserType
 */
const UserType = sequelize.define(
  "User_Type",
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
    createdAt:false,
    updatedAt:false,
    tableName: "user_type",
    schema: "seamind_data",
    // indexes: [
    //   {
    //     // unique: true,
    //     fields: ["access_token"],
    //   },
    // ],
  }
);
sequelizeTransforms(UserType);

module.exports = UserType;
