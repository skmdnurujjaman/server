/** @format */

const { check, validationResult } = require("express-validator");

exports.validateData = [
  check("name").notEmpty().withMessage("Name can not be empty"),

  check("email")
    .notEmpty()
    .withMessage("Name can not be empty")
    .isEmail()
    .withMessage("Enter a valid Email!"),
  check("username").notEmpty().withMessage("Username can not be empty"),
  check("phone").notEmpty().withMessage("Phone can not be empty"),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
