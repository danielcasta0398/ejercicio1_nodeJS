const { User } = require('../models/userModel');

const getAllUsers = async (req, res) => {
  try {

    const users = await User.findAll();
    res.status(200).json({
      users,
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { user } = req;   

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};

const createUsers = async (req, res) => {
  try {
    const { name, email, password, role, status } = req.body;

    const newUser = await User.create({
      name,
      email,
      password,
      role,
      status,
    });

    res.status(200).json({ newUser });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    
    const { user } = req;
    const { name } = req.body;
        
    await user.update({ name });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });

   
    await user.update({ status: 'disabled' });

    res.status(200).json({
      status: 'sucess',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  createUsers,
  getUserById,
  updateUser,
  deleteUser,
};
