const { db, Kitty, Pupper, Faction } = require("../server/db");

const seed = async () => {
  await db.sync({ force: true });

  //Factions
  const alliance = await Faction.create({
    name: "Canine Alliance",
    imageUrl: "alliance.jpg",
  });
  const monarchy = await Faction.create({
    name: "Feline Monarchy",
    imageUrl: "monarchy.jpg",
  });
  const horrors = await Faction.create({
    name: "The Horrors",
    imageUrl: "horrors.jpg",
  });

  //Kitties
  const sirHarrisonIv = await Kitty.create({
    name: "sir harrison iv",
    imageUrl: "kitty3.jpg",
    info: "sir harrison iv is the faction leader of the feline monarchy. it has only been 2 year since he ascended the throne after his father's mysterious death. the horrors coincidentally arrived shortly after and have tested the new ruler's meddle.",
    factionId: monarchy.id,
  });
  const charles = await Kitty.create({
    name: "charles",
    imageUrl: "kitty1.jpg",
    info: "your average kittizen in the feline monarchy. innocent, adorable, and determined. ted is his older brother.",
    factionId: monarchy.id,
  });
  const ted = await Kitty.create({
    name: "ted",
    imageUrl: "kitty2.png",
    info: "a strange, self-absorbed kitty who cares little for current events. ted mostly fills his days with hunting, screaming, and critiquing the works of literature. charles is his younger brother.",
    factionId: monarchy.id,
  });
  const redacted = await Kitty.create({
    name: "[REDACTED]",
    imageUrl: "kitty0.jpeg",
    info: "not much is known about [REDACTED]. the only thing we do know is that it was the original horror. wherever it goes, more are sure to follow.",
    factionId: horrors.id,
  });

  //Puppers
  const pupper1 = await Pupper.create({
    name: "pupper1",
    imageUrl: "pupper1.jpg",
    info: "pupper1",
    factionId: alliance.id,
  });
  const pupper2 = await Pupper.create({
    name: "pupper2",
    imageUrl: "pupper2.jpg",
    info: "pupper2",
    factionId: alliance.id,
  });
  const pupper3 = await Pupper.create({
    name: "pupper3",
    imageUrl: "pupper3.jpg",
    info: "pupper3",
    factionId: alliance.id,
  });
  const pupper0 = await Pupper.create({
    name: "pupper0",
    imageUrl: "pupper0.jpg",
    info: "pupper0",
    factionId: horrors.id,
  });

  db.close();
  console.log(`Seed successful`);
};

seed().catch((ex) => {
  db.close();
  console.log(`
  
      Seed unsucessful:
  
      ${ex.message}
  
      ${ex.stack}
  
    `);
});
