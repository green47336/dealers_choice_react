const { db, Kitty, Pupper, Faction } = require("../server/db");

const seed = async () => {
  await db.sync({ force: true });

  //Factions
  const alliance = await Faction.create({
    name: "canine alliance",
    imageUrl: "alliance.jpg",
  });
  const monarchy = await Faction.create({
    name: "feline monarchy",
    imageUrl: "monarchy.jpg",
  });
  const horrors = await Faction.create({
    name: "the horrors",
    imageUrl: "horrors.jpg",
  });

  //Kitties
  const sirHarrisonIv = await Kitty.create({
    name: "sir harrison iv",
    imageUrl: "kitty3.jpg",
    info: "sir harrison iv is the faction leader of the feline monarchy. it has only been 2 year since he ascended the throne after his father's mysterious death. the horrors coincidentally arrived shortly after and have tested the new ruler's mettle.",
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
    info: "a strange, self-absorbed kitty who cares little for current events. ted mostly fills his days with hunting, screaming, and critiquing literary works. charles is his younger brother.",
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
    name: "doug",
    imageUrl: "pupper1.jpg",
    info: "leader of the canine alliance. very cool dude.",
    factionId: alliance.id,
  });
  const pupper2 = await Pupper.create({
    name: "poppy",
    imageUrl: "pupper2.jpg",
    info: "just the sweetest little thing. would gladly sacrifice the lives of others for the cause.",
    factionId: alliance.id,
  });
  const pupper3 = await Pupper.create({
    name: "ranger",
    imageUrl: "pupper3.jpg",
    info: "the lawman of the realm.",
    factionId: alliance.id,
  });
  const pupper0 = await Pupper.create({
    name: "gemini",
    imageUrl: "pupper0.jpg",
    info: "while originally thought two be two distinct beings, it is now understood to be one.",
    factionId: horrors.id,
  });

  const pupper01 = await Pupper.create({
    name: "shank",
    imageUrl: "pupper01.jpg",
    info: "these photos of shank are a dime a dozen. it's said you'll only be able to snap a photo at the expense of your own life.",
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
