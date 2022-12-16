require("dotenv").config();
const { UsersPokemon } = require("../models/userspokemon");
const { sequelize } = require("../util/database");

module.exports = {
  addPokemon: async (req, res) => {
    try {
      const {
        id,
        pokemonQuantity,
        pokemonGameFound,
        pokemonMega,
        pokemonGmax,
        pokemonNickname,
        pokemontableId,
        userId,
        pokemontablePokemontableid
      } = req.body;
      await UsersPokemon.create({
        id,
        pokemonQuantity,
        pokemonGameFound,
        pokemonMega,
        pokemonGmax,
        pokemonNickname,
        pokemontableId,
        userId,
        pokemontablePokemontableid
      });
      res.sendStatus(200);
    } catch (error) {
      console.log("ERROR IN addPokemon");
      console.log(error);
      res.sendStatus(400);
    }
  },

  getUsersPokemon: async (req, res) => {
    try {
      const { userId } = req.params;
      const [userspokemon, metadata] =
        await sequelize.query(`
        select   userspokemons."id", userspokemons."pokemonQuantity", userspokemons."pokemonGameFound", userspokemons."pokemonMega", userspokemons."pokemonGmax", userspokemons."pokemonNickname", userspokemons."userId", pokemontables."pokemontableid", pokemontables."pokemonImg", pokemontables."pokemonName", pokemontables."pokemonShinyImg"
        from userspokemons
        full outer join
        pokemontables on userspokemons."pokemontablePokemontableid"=pokemontables."pokemontableid" 
        where userspokemons."userId"=${userId}`)

      res.status(200).send(userspokemon);
    } catch (error) {
      console.log("ERROR IN getUsersPokemon");
      console.log(error);
      res.sendStatus(400);
    }
  }, 

  getAllUsersPokemonAndMore: async (req, res) => {
try {
  const {userId} = req.params;
  const [userspokemonall, metadata] =
  await sequelize.query(`select   userspokemons."id", userspokemons."pokemonQuantity", userspokemons."pokemonGameFound", userspokemons."pokemonMega", userspokemons."pokemonGmax", userspokemons."pokemonNickname", userspokemons."userId", pokemontables."pokemontableid", pokemontables."pokemonImg", pokemontables."pokemonName", pokemontables."pokemonShinyImg"
  from userspokemons
  full outer join
  pokemontables on userspokemons."pokemontablePokemontableid"=pokemontables."pokemontableid" 
      where userspokemons."userId"=${userId}
or userspokemons."id" is null
order by pokemontables."pokemontableid" ASC
`)
res.status(200).send(userspokemonall)
}catch (error) {
  console.log("ERROR IN getUsersPokemon");
  console.log(error);
  res.sendStatus(400);
}
  },

  deleteUsersPokemon: async (req, res) => {
    try {
        const {id} = req.params
        await UsersPokemon.destroy({where: {id: +id}})
        res.sendStatus(200)
    } catch (error) {
        console.log('ERROR IN DELETE')
        console.log(error)
        res.sendStatus(400)
    }
},

getEveryUsersPokemon:  async (req, res) => {
try {
  const everyUsersPokemon = await UsersPokemon.findAll({

  })
  res.status(200).send(everyUsersPokemon)
}catch (error) {
  console.log('ERROR IN everyUsersPokemon')
  console.log(error)
  res.sendStatus(400)
}
}
};
