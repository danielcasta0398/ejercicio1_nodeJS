const { Repair } = require('../models/repairsModel');
const { User } = require('../models/userModel');
const { catchAsync } = require('../utils/cathAsync');
const { storage } = require('../utils/firebase');
const { ref, uploadBytes, getDownloadURL } = require('firebase/storage');

const getRepairs = catchAsync(async (req, res, next) => {
  const repairs = await Repair.findAll({
    include: [{ model: User }],
  });
  res.status(200).json({ repairs });
});

const getRepairsById = catchAsync(async (req, res, next) => {
  const { repairs } = req;

  const imgRef = ref(storage, repairs.imgPath);
  const url = await getDownloadURL(imgRef);

  repairs.imgPath = url;

  res.status(200).json({ repairs });
});

const createRepair = catchAsync(async (req, res, next) => {
  const { userId, date, computerNumber, comments } = req.body;

  const imgRef = ref(storage, `users/${req.file.originalname}`);
  const imgUploaded = await uploadBytes(imgRef, req.file.buffer);

  const newRepair = await Repair.create({
    userId,
    date,
    computerNumber,
    comments,
    imgPath: imgUploaded.metadata.fullPath,
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
