require("dotenv").config();
const {SECRET} = process.env
const {PokemonTable} = require('../models/pokemontable')
const {User} = require('../models/user')





module.exports = {

    getPokemonTable: async (req, res) => {
        try {
            const pokemontable = await PokemonTable.findAll({
                
        limit: 386,

        order: [
            ["pokemontableid", "ASC"]
           ],
               
               
            })
            res.status(200).send(pokemontable)
        } catch (error) {
            console.log('ERROR IN getAllPosts')
            console.log(error)
            res.sendStatus(400)
        }
    },
    getPokemonTable2: async (req, res) => {
        try {
            const pokemontable2 = await PokemonTable.findAll({
                offset: 386,
                 limit: 335,
                 order: [
                    ["pokemontableid", "ASC"]
                   ],
            })
            res.status(200).send(pokemontable2)
        } catch (error) {
            console.log('ERROR IN getAllPosts')
            console.log(error)
            res.sendStatus(400)
        }
    }, 
    getPokemonTable3: async (req, res) => {
        try {
            const pokemontable3 = await PokemonTable.findAll({
                offset: 721,
                 
                 order: [
                    ["pokemontableid", "ASC"]
                   ],
            })
            res.status(200).send(pokemontable3)
        } catch (error) {
            console.log('ERROR IN getAllPosts')
            console.log(error)
            res.sendStatus(400)
        }
    } 
    




}
