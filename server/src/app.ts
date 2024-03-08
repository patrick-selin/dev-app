// src/app.ts
import express from "express";
const app = express();

app.get("/", (_req, res) => {
  res.send("Hello, TypeS world!");
});

module.exports = app;
