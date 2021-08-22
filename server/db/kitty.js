const Sequelize = require("sequelize");
const db = require("./db");
const { STRING } = Sequelize;

const Kitty = db.define("kitties", {
  name: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  imageUrl: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  info: {
    type: STRING,
    unique: true,
  },
});

module.exports = Kitty;
