const express = require("express");
const {
  getAllUsers,
  createUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { userExists } = require("../middlewares/usersMiddlewares");
const { validationDateResult, checkValidation } = require("../middlewares/validationMiddleware");
const router = express.Router();

router.get("/", getAllUsers);

router.post("/", validationDateResult, checkValidation, createUsers);

/*router.get('/:id', getUserById)

router.patch('/:id', updateUser)

router.delete('/:id' , deleteUser)*/

router.route("/:id")
  .get(userExists, getUserById)
  .patch(userExists, updateUser)
  .delete(userExists, deleteUser);

module.exports = { userRoutes: router };
