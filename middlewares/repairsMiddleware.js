const { Repair } = require('../models/repairsModel');
const { AppError } = require('../utils/appError');
const { catchAsync } = require('../utils/cathAsync');

const repairExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const repair = await Repair.findOne({ where: { id } });

  if (!repair) {
    return next(new AppError('Repair not found given that id', 404));
  }

  req.repairs = repair;

  next();
});

module.exports = { repairExists };
