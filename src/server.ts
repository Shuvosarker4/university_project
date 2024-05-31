import app from "./app";
import mongoose from "mongoose";
import config from "./config";
const port = 5000;

async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    app.listen(config.port, () => {
      console.log(`server is running on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
