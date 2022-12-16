const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')



module.exports = {
    User : sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        hashedPass: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        profilepicture: DataTypes.STRING

    })
}
