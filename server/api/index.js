const router = require("express").Router();

router.use("/faction", require("./faction.js"));

module.exports = router;
