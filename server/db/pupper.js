const Sequelize = require("sequelize");
const db = require("./db");
const { STRING } = Sequelize;

const Pupper = db.define("puppers", {
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

module.exports = Pupper;
