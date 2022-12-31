import mongoose from "mongoose";
import { ENV } from "./utils/constants.js";

const URI = ENV?.URI;
const connectDB = () => {
  mongoose
    .connect(URI)
    .then((e) => console.log("connected to DB"))
    .catch((e) => {
      console.log(e);
      process.exit(1);
    });
};

export default connectDB;
