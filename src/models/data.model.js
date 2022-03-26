/** @format */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 250,
      min: 2,
    },
    email: {
      type: String,
      required: true,
      max: 250,
      min: 6,
    },
    username: {
      type: String,
      required: true,
      max: 250,
      min: 2,
    },
    phone: {
      type: String,
      required: true,
      max: 10,
      min: 9,
    },
    address: {
      type: String,
    },
  },
  {
    timestams: true,
  }
);

const dataModel = mongoose.model("SampleData", dataSchema);

module.exports = dataModel;
