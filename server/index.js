const path = require("path");
const express = require("express");
const app = express();
module.exports = app;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/dist", express.static(path.join(__dirname, "..", "dist")));

app.use("/api", require("./api"));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "src", "index.html"));
});

app.use((ex, req, res, next) => {
  console.error(ex);
  console.error(ex.stack);
  res.status(ex.status || 500).send(ex.message || "No clue bro.");
});
