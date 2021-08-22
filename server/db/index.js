const db = require("./db");
const Kitty = require("./kitty.js");
const Pupper = require("./pupper.js");
const Faction = require("./faction.js");

Kitty.belongsTo(Faction, { as: "faction" });
Faction.hasMany(Kitty, { as: "kitties", foreignKey: "factionId" });

Pupper.belongsTo(Faction, { as: "faction" });
Faction.hasMany(Pupper, { as: "puppers", foreignKey: "factionId" });

module.exports = {
  db,
  Kitty,
  Pupper,
  Faction,
};
