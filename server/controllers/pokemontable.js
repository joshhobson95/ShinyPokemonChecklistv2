require("dotenv").config();
const {SECRET} = process.env
const {PokemonTable} = require('../models/pokemontable')
const {User} = require('../models/user')





module.exports = {

    getPokemonTable: async (req, res) => {
        try {
            const pokemontable = await PokemonTable.findAll({
                // include: [{
                //     model: User,
                //     required: true,
                //     attributes: [`username`]
                // }]
            })
            res.status(200).send(pokemontable)
        } catch (error) {
            console.log('ERROR IN getAllPosts')
            console.log(error)
            res.sendStatus(400)
        }
    }
    




}
