const express = require('express');
const {
  createRepair,
  getRepairs,
  getRepairsById,
  updateRepairs,
  deleteRepairs,
} = require('../controllers/postController');
const { repairExists } = require('../middlewares/repairsMiddleware');
const {
  validationRepairs,
  checkValidation,
} = require('../middlewares/validationMiddleware');
const { upload } = require('../utils/multer');

const router = express.Router();

router.get('/', getRepairs);
router.post(
  '/',
  upload.single('imgPath'),
  validationRepairs,
  checkValidation,
  createRepair
);
router
  .route('/:id')
  .get(repairExists, getRepairsById)
  .patch(repairExists, updateRepairs)
  .delete(repairExists, deleteRepairs);

module.exports = { postRouter: router };
