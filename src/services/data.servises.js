/** @format */

const dataModel = require("../models/data.model");

module.exports.serviceGetData = async () => {
  const data = await dataModel.find({});

  try {
    return data;
  } catch (error) {
    return error;
  }
};
module.exports.serviceGetSingleData = async (req) => {
  const id = req.param.id;

  try {
    const data = dataModel.findOne({ _id: id }).exec(async (error, data) => {
      if (data) {
        return { success: true, status: 400, msg: data };
      }
    });
  } catch (error) {
    return error;
  }
};
module.exports.serviceCreateData = async (insertedData) => {
  const { name, email, username, phone, address } = insertedData;
  try {
    dataModel.findOne({ email }).exec(async (error, user) => {
      if (user) {
        return { success: false, status: 400, msg: "Data already exist!!" };
      } else {
        const _data = new dataModel({
          name,
          email,
          username,
          phone,
          address,
        });
        await _data.save((error, data) => {
          if (error) {
            return {
              success: false,
              status: 400,
              msg: "Something went wrong!!",
            };
          }
          if (data) {
            return {
              success: true,
              status: 201,
              body: "Data inserted successfully!!",
            };
          }
        });
      }
    });
  } catch (error) {
    return { success: false, status: 400, msg: "Something went wrong!!" };
  }
};
