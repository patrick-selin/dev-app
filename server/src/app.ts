// src/app.ts
import express from "express";
const app = express();

app.get("/", (_req, res) => {
  res.send("Hello, TS world from Docker with hot reloading!");
});

// send reqs to controllers

module.exports = app;
