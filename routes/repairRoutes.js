const express = require('express');
const {
  createRepair,
  getRepairs,
  getRepairsById,
  updateRepairs,
  deleteRepairs,
} = require('../controllers/postController');
const { repairExists } = require('../middlewares/repairsMiddleware');
const router = express.Router();

router.get('/', getRepairs);
router.post('/', createRepair);
router
  .route('/:id')
  .get(repairExists, getRepairsById)
  .patch(repairExists, updateRepairs)
  .delete(repairExists, deleteRepairs);

module.exports = { postRouter: router };
