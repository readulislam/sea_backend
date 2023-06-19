const { DataTypes } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const { tokenTypes } = require("../config/tokens");
const sequelize = require("../utils/database");

/**
 * @typedef Entity
 */
const Entity = sequelize.define(
  "Entity",
  {
    entity_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "entity_type",
        key: "id",
      },
    },
    initials_pt: {
      type: DataTypes.STRING,
    },
    initials_en: {
      type: DataTypes.STRING,
    },
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
    comments_pt: {
      type: DataTypes.STRING,
    },
    comments_en: {
      type: DataTypes.STRING,
    },
    general_email: {
      type: DataTypes.STRING,
    },
    url_pt: {
      type: DataTypes.STRING,
    },
    url_en: {
      type: DataTypes.STRING,
    },
    contact_name: {
      type: DataTypes.STRING,
    },
    contact_position: {
      type: DataTypes.STRING,
    },
    contact_phone: {
      type: DataTypes.STRING,
    },
    contact_email: {
      type: DataTypes.STRING,
    },
    address_description: {
      type: DataTypes.STRING,
    },
    address_city: {
      type: DataTypes.STRING,
    },
    address_postcode: {
      type: DataTypes.STRING,
    },
    address_postcode_descrition: {
      type: DataTypes.STRING,
    },
    address_phone: {
      type: DataTypes.STRING,
    },
    country_id: {
      type: DataTypes.INTEGER,
      references:{
        model:'country',
        key:'id'
      }
    },
    profile_image_link: {
      type: DataTypes.STRING,
    },
    banner_image_link: {
      type: DataTypes.STRING,
    },
    dashboard_id: {
        type: DataTypes.INTEGER,
        references:{
          model:'dashboard',
          key:'id'
        }
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
    tableName: "entity",
    schema: "seamind_data",
    // indexes: [
    //   {
    //     // unique: true,
    //     fields: ["access_token"],
    //   },
    // ],
  }
);
sequelizeTransforms(Entity);

module.exports = Entity;
