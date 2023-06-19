const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef DashboardSingleboard
 */
const DashboardSingleboard = sequelize.define(
  "DashboardSingleboard",
  {
   dashboard_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "dashboard",
        key: "id",
      },
    },
    singleboard_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "singleboard",
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
    tableName: "dashboard_singleboard",
    schema: "seamind_data",
  }
);
sequelizeTransforms(DashboardSingleboard);

module.exports = DashboardSingleboard;
