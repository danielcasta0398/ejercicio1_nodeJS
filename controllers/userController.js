const { Repair } = require('../models/repairsModel');
const { User } = require('../models/userModel');
const { catchAsync } = require('../utils/cathAsync');

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll({
    include: [{ model: Repair }],
  });
  res.status(200).json({
    users,
  });
});

const getUserById = catchAsync(async (req, res, next) => {
  const { user } = req;

  res.status(200).json({ user });
});

const createUsers = catchAsync(async (req, res, next) => {
  const { name, email, password, role, status } = req.body;

  const newUser = await User.create({
    name,
    email,
    password,
    role,
    status,
  });

  res.status(200).json({ newUser });
});

const updateUser = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { name, email } = req.body;

  await user.update({ name, email });

  res.status(200).json({ status: 'success' });
});

const deleteUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  await user.update({ status: 'disabled' });

  res.status(200).json({
    status: 'sucess',
  });
});

module.exports = {
  getAllUsers,
  createUsers,
  getUserById,
  updateUser,
  deleteUser,
};
