/** @format */
const express = require("express");
const {
  createData,
  getAllData,
  getSingleData,
} = require("./controllers/data.controller");
const {
  validateData,
  isRequestValidated,
} = require("./validators/data.validator");
const router = express.Router();

router.get("/", getAllData);

router.get("/:id", getSingleData);

router.post("/create", validateData, isRequestValidated, createData);

router.put("/update/:id", () => {
  res.status(200).jason({ message: "Data updated" });
});

module.exports = router;
