import express, { Router } from "express";
import mongoose from "mongoose";
import { port, mongo_uri } from "./config.js";
import router from "./router/user.js";
const app = express();

app.use(express.json());
app.use("/", router);

const connect = () => {
  try {
    mongoose.connect(mongo_uri, {}).then(() => {
      console.log("Connected to DB");
    });
  } catch (error) {
    console.log("Could not connect to DB");
    process.exit(1);
  }
};

app.listen(port, async () => {
  console.log(`Server running ${port}`);
  connect();
});
