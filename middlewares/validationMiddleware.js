const { body } = require('express-validator');
const { validationResult } = require('express-validator');

const validationDateResult = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('email')
    .notEmpty()
    .withMessage('Email cannot be empty')
    .isEmail()
    .withMessage('Email is incorrect'),
  body('password')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 8 })
    .withMessage('Passwors min characters is 8'),
];

const validationRepairs = [
  body('date')
    .notEmpty()
    .withMessage('Date cannot be empty')
    .isDate()
    .withMessage('Date is incorrect or this empty'),
  body('computerNumber')
    .notEmpty()
    .withMessage('Computer number cannot be empty'),
  body('comments').notEmpty().withMessage('comments cannot be empty'),
];

const checkValidation = (req, res, next) => {
  const errors = validationResult(req);

  const msg = errors.array().map(({ msg }) => msg);

  const errorMsg = msg.join('. ');

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errorMsg,
    });
  }
  next();
};

module.exports = { validationDateResult, validationRepairs, checkValidation };
