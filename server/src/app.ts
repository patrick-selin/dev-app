// src/app.ts
import express from "express";
const app = express();

app.get("/", (_req, res) => {
  res.send("Hello, TS world!");
});

// send reqs to controllers

module.exports = app;
