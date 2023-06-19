const { DataTypes, Op } = require("sequelize");
const sequelizeTransforms = require("sequelize-transforms");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const { roles } = require("../config/roles");
const sequelize = require("../utils/database");

/**
 * @typedef User
 */
var User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email");
        }
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error(
            "Password must contain at least one letter and one number"
          );
        }
        if (value.length < 8) {
          throw new Error("Password must be at least 8 characters");
        }
      },
    },
    entity_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "entity",
        key: "id",
      },
    },
    user_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user_type",
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
    tableName: "user",
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    schema: "seamind_data",
    hooks: {
      async beforeSave(user) {
        if (user.changed("password")) {
          /* eslint-disable no-param-reassign */
          user.password = await bcrypt.hash(user.password, 8);
        }
      },
    },
  }
);
sequelizeTransforms(User);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
User.isEmailTaken = async function (email, excludeUserId = null) {
  const user = this;
  return user.findOne({ where: { email: email.toLowerCase(), id: { [Op.not]: excludeUserId } } });
};


/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
User.prototype.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};





module.exports = User;
