// src/index.ts

const app = require("./app");
require("dotenv").config();
const config = require("./utils/config");

console.log(`configPORTTI is:: ${config.PORT}`);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
