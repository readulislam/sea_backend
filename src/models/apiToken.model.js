const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef ApiToken
 */
const ApiToken = sequelize.define(
  "Api_Token",
  {
    access_token: {
      type: DataTypes.STRING(256),
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    token_type: {
      type: DataTypes.STRING,
      enum: [
        tokenTypes.REFRESH,
        tokenTypes.RESET_PASSWORD,
        tokenTypes.VERIFY_EMAIL,
      ],
    },
    token_expiry_date: {
      type: DataTypes.DATEONLY,
    },
    is_agent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_token_expired: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
    createdAt: false,
    updatedAt: false,
  
    tableName: "api_token",
    schema:'seamind_data',
  
    // indexes: [
    //   {
    //     unique: true,
    //     fields: ["access_token"],
    //   },
    // ],
  }
);
sequelizeTransforms(ApiToken);

 
module.exports = ApiToken
