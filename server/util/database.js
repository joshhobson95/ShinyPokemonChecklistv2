require('dotenv').config()
require('pg')
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')



const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    sequelize
}