/** @format */
const dataModel = require("../models/data.model");

module.exports.createData = async (req, res) => {
  try {
    const { name, email, username, phone, address } = req.body;
    dataModel.findOne({ email }).exec(async (error, user) => {
      if (user)
        return res.status(400).json({ message: "Data already exist!!" });
    });
    const _data = new dataModel({
      name,
      email,
      username,
      phone,
      address,
    });
    console.log(_data);
    await _data.save((error, data) => {
      if (error) {
        console.log(error);
        res.status(400).json({ message: "Something went wrong!!" });
      }
      if (data) {
        res.status(201).json({ message: "Data created successfully!!" });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
