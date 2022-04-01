/** @format */

const express = require("express");
const { default: mongoose } = require("mongoose");
const routes = require("./routes");
const { connect } = require("./utils/connection");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

app.use(express.json());
app.get("api/", (req, res) => {
  res.send("Call routes with /api");
});
app.use("api/", routes);

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
connect();
