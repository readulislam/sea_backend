const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { uploadStatus } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef IndicatorUpload
 */
const IndicatorUpload = sequelize.define(
  "IndicatorUpload",
  {
    entity_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "role",
        key: "id",
      },
    },
    indicator_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "role",
        key: "id",
      },
    },
    upload_date: {
      type: DataTypes.STRING,
    },
    upload_status: {
      type: DataTypes.STRING,
       enum: [
        uploadStatus.SUCCESS,
        uploadStatus.FAILURE,
        uploadStatus.VERIFIED,
      ],
    },
    uoload_log: {
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
    tableName: "indicator_upload",
    schema: "seamind_data",
  }
);
sequelizeTransforms(IndicatorUpload);

module.exports = IndicatorUpload;
