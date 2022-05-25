const { Repair } = require('../models/repairsModel');
const { User } = require('../models/userModel');
const { catchAsync } = require('../utils/cathAsync');

const getRepairs = catchAsync(async (req, res, next) => {
  const repairs = await Repair.findAll({
    include: [{ model: User }],
  });
  res.status(200).json({ repairs });
});

const getRepairsById = catchAsync(async (req, res, next) => {
  const { repairs } = req;

  res.status(200).json({ repairs });
});

const createRepair = catchAsync(async (req, res, next) => {
  const { userId, date, computerNumber, comments } = req.body;
  const newRepair = await Repair.create({
    userId,
    date,
    computerNumber,
    comments,
  });

  res.status(200).json({ newRepair });
});

const updateRepairs = catchAsync(async (req, res, next) => {
  const { repairs } = req;

  await repairs.update({ status: 'completed' });
  res.status(200).json({ status: 'success' });
});

const deleteRepairs = catchAsync(async (req, res, next) => {
  const { repairs } = req;

  await repairs.update({ status: 'cancelled' });

  res.status(200).json({ status: 'success' });
});

module.exports = {
  createRepair,
  getRepairs,
  getRepairsById,
  updateRepairs,
  deleteRepairs,
};
