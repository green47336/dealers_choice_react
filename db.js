const { STRING } = require("sequelize");
const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/dcrdb");

const Kitty = db.define("kitties", {
  name: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  image: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  info: {
    type: STRING,
    unique: true,
  },
});

const Pupper = db.define("puppers", {
  name: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  image: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  info: {
    type: STRING,
    unique: true,
  },
});

const Faction = db.define("factions", {
  name: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  image: {
    type: STRING,
    unique: true,
  },
});

Kitty.belongsTo(Faction, { as: "faction" });
Faction.hasMany(Kitty, { as: "kitties", foreignKey: "factionId" });

Pupper.belongsTo(Faction, { as: "faction" });
Faction.hasMany(Pupper, { as: "puppers", foreignKey: "factionId" });
