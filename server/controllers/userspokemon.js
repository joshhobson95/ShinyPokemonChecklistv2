require("dotenv").config();
const {SECRET} = process.env
const {UsersPokemon} = require('../models/userspokemon')
const {User} = require('../models/user')
const {PokemonTable} = require('../models/pokemontable')
const {sequelize} = require('../util/database')






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
            const [userspokemon, metadata] = await sequelize.query(`select userspokemons."pokemonQuantity", userspokemons."pokemonGameFound", userspokemons."pokemonMega", userspokemons."pokemonGmax", userspokemons."userId", pokemontables."id", pokemontables."pokemonImg", pokemontables."pokemonName", pokemontables."pokemonShinyImg", users."id"
            from userspokemons
            full outer join
            pokemontables on userspokemons."pokemontableId"=pokemontables."id"
            full outer join
            users on userspokemons."userId"=users."id"
            where users."id"=${userId}
            
            `);

            // })
            res.status(200).send(userspokemon)
        } catch (error) {
            console.log('ERROR IN getUsersPokemon')
            console.log(error)
            res.sendStatus(400)
        }
    },


   





    
}
    
