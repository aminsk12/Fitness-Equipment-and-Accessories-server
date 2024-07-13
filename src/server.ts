import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";
import { Server } from "http";


let server: Server;
const port = config.port;

async function main() {
  try {
    await mongoose.connect(config.db_url as string);

    server = app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

process.on("unhandledRejection", () => {
  console.log(`unhandledRejection is detected. Shutting down...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", () => {
  console.log(` uncaughtException is detected. Shutting down...`);
  process.exit(1);
});
