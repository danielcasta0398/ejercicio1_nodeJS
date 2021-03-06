const { User } = require('../models/userModel');
const { catchAsync } = require('../utils/cathAsync');
const { AppError } = require('../utils/appError');

const userExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  if (!user) {
    return next(new AppError('The user not exists', 404));
  }

  req.user = user;

  next();
});

module.exports = { userExists };
