const router = require("express").Router();
const { Faction, Kitty, Pupper } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    res.send(
      await Faction.findAll({
        include: [
          {
            model: Kitty,
            as: "kitties",
          },
          {
            model: Pupper,
            as: "puppers",
          },
        ],
      })
    );
  } catch (ex) {
    next(ex);
  }
});

router.get("/:id", async (req, res, send) => {
  try {
    res.send(
      await Faction.findByPk(req.params.id, {
        include: [
          {
            model: Kitty,
            as: "kitties",
          },
          {
            model: Pupper,
            as: "puppers",
          },
        ],
      })
    );
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
