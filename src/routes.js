/** @format */
const express = require("express");
const { createData } = require("./controllers/data.controller");
const {
  validateData,
  isRequestValidated,
} = require("./validators/data.validator");
const router = express.Router();

router.get("/", (req, res) => {
  //return all data from database
  res.send("Hello from server");
});

router.get("/:id", (req, res) => {
  //return single data from database
  res.send("Hello from server");
});

router.post("/create", validateData, isRequestValidated, createData);

router.put("/update/:id", () => {
  res.status(200).jason({ message: "Data updated" });
});

module.exports = router;
