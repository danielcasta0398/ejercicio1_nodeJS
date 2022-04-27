const { Sequelize } = require( 'sequelize' );

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Daniel0119',
    database: 'repairs_pc',
    logging: false,
    
})

module.exports = { db }