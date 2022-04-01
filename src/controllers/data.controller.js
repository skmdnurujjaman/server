/** @format */

const {
  serviceCreateData,
  serviceGetData,
  serviceGetSingleData,
} = require("../services/data.servises");

module.exports.getAllData = async (req, res) => {
  const result = await serviceGetData(req);
  res.status(200).json({ message: result });
};
module.exports.getSingleData = async (req, res) => {
  const result = await serviceGetSingleData(req);
  res.status(200).json({ message: result });
};
module.exports.createData = async (req, res) => {
  try {
    const result = await serviceCreateData(req.body);
    if (result) {
      res.status(result.status).json({ message: result.msg });
    }
  } catch (error) {
    res.status(500).json({ message: "Server is not responding!!" });
  }
};
