
const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')





module.exports = {
    UsersPokemon : sequelize.define('userspokemon', {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: true,
            primaryKey: true
        },
        pokemonQuantity: DataTypes.INTEGER,
        pokemonGameFound: DataTypes.STRING, 
        pokemonMega: DataTypes.BOOLEAN,
        pokemonGmax: DataTypes.BOOLEAN, 
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        },

     
  
     

    })
    
}
