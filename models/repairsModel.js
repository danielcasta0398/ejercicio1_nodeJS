const { DataTypes, Sequelize } = require('sequelize');
const { db } = require('../utils/database');

//Repairs
const Repair = db.define('repair',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },  
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending'
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

module.exports= { Repair};