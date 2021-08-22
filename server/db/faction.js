const Sequelize = require("sequelize");
const db = require("./db");
const { STRING } = Sequelize;

const Faction = db.define("factions", {
  name: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  imageUrl: {
    type: STRING,
    unique: true,
  },
});

module.exports = Faction;
