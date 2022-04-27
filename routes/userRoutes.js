const express = require("express");
const { route, use } = require("express/lib/router");
const {
  getAllUsers,
  createUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { userExists } = require("../middlewares/usersMiddlewares");
const router = express.Router();

router.get("/", getAllUsers);

router.post("/", createUsers);

/*router.get('/:id', getUserById)

router.patch('/:id', updateUser)

router.delete('/:id' , deleteUser)*/

router.route("/:id")
  .get(userExists, getUserById)
  .patch(userExists, updateUser)
  .delete(userExists, deleteUser);

module.exports = { userRoutes: router };
