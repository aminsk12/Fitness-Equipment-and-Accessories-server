import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

let server;

async function main() {
  await mongoose.connect(config.db_url as string);
  server = app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
}

main();

