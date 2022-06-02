const { DataTypes, Sequelize } = require('sequelize');
const { db } = require('../utils/database');

//Repairs
const Repair = db.define('repair', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  computerNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  comments: {
    type: DataTypes.STRING,
    defaultValue: false,
  },

  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending',
  },

  imgPath: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { Repair };
