const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef SingleboardIndicator
 */
const SingleboardIndicator = sequelize.define(
  "SingleboardIndicator",
  {
    singleboard_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "singleboard",
        key: "id",
      },
    },
    indicator_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "indicator",
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
    tableName: "singleboard_indicator",
    schema: "seamind_data",
  }
);
sequelizeTransforms(SingleboardIndicator);

module.exports = SingleboardIndicator;
