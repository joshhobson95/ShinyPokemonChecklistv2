require("dotenv").config();
const {SECRET} = process.env
const {UsersPokemon} = require('../models/userspokemon')
const {User} = require('../models/user')
const {PokemonTable} = require('../models/pokemontable')






module.exports = {

    addPokemon: async (req, res) => {
        try {
            const {id, pokemonQuantity, pokemonGameFound, pokemonMega, pokemonGmax, pokemontableId, userId} = req.body
            await UsersPokemon.create({id, pokemonQuantity, pokemonGameFound, pokemonMega, pokemonGmax, pokemontableId, userId})
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR IN addPokemon')
            console.log(error)
            res.sendStatus(400)
        }
    },

    getUsersPokemon: async (req, res) => {

        try {
            const {userId} = req.params
            const userspokemon = await UsersPokemon.findAll({
                where: {userId: userId},
                include: [{
                    model: User,
                    required: true,
                    attributes: [`username`]
                }]
            })
            res.status(200).send(userspokemon)
        } catch (error) {
            console.log('ERROR IN getUsersPokemon')
            console.log(error)
            res.sendStatus(400)
        }
    },


   





    
}
    
