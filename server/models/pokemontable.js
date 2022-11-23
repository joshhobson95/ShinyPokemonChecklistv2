
const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')


//Lists all Pokemon- only for GET

module.exports = {
    PokemonTable : sequelize.define('pokemontable', {


        pokemonName: DataTypes.STRING,
        
        pokemontableid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        pokemonImg: DataTypes.STRING,
        pokemonShinyImg: DataTypes.STRING,
      
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
     
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
     

    })
    
}
