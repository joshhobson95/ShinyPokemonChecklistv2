require('dotenv').config()
require('pg')
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')



const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    protocol: 'postgres',
    logging: true,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

const sequelizeConnection = async () => {
    try {
        sequelize
        .authenticate()
        .then(() => {
            console.log("Postgres connection has been established")
        })
    } catch (error){
        console.log("Unable to connect to databaze:", error)
    }
}

module.exports = {
    sequelize,
    sequelizeConnection

}

//added ssl require reute and protocol and require(pg)