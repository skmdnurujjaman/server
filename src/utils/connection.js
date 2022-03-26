/** @format */
const mongoose = require("mongoose");
require("dotenv").config();

const URI = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.uwzmb.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;
// console.log(URI);
module.exports.connect = async () => {
  const db = await mongoose
    .connect(URI)
    .then(() => {
      console.log("db connected");
    })
    .catch((error) => {
      console.log(error);
    });
  //   if (process.env.SYSTEM_ENV != "dev") {
  //     await db.on("error", console.error.bind("Some thing went wrong!!"));
  //   } else {
  //     await db.on("error", console.error.bind(console, "connection error: "));
  //     await db.once("open", function () {
  //       console.log("Connected successfully");
  //     });
  //   }
};
