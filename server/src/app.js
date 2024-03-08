// src/app.js
const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  res.send("Hello, JS world!");
});

module.exports = app;
