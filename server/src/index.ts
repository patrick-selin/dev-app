// src/index.ts

import dotenv from "dotenv";
dotenv.config();

const app = require("./app");

const config = require("./utils/config");

console.log(`config PORTTI on ::: ${config.PORT}`);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
