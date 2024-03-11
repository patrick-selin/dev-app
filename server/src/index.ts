// src/index.ts

import dotenv from "dotenv";
dotenv.config();

const app = require("./app");

const config = require("./utils/config");

console.log(`configPORTTI is:: ${config.PORT}`);

app.listen(config.PORT, () => {
  console.log(`Serverr running on port ${config.PORT}`);
});
