const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const {  representationTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef Representation
 */
const Representation = sequelize.define(
  "Representation",
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

    representation_type: {
      type: DataTypes.STRING,
      enum:[
        representationTypes.AREA,
        representationTypes.GRAPH,
        representationTypes.MAP,
        representationTypes.MARKER_MAP,
        representationTypes.TABLE,
      ] 
    },
    thumbnail_image_link: {
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
    tableName: "representation",
    schema: "seamind_data",
  }
);
sequelizeTransforms(Representation);

module.exports = Representation;
