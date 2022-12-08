require('dotenv').config();
const {sequelize} = require('./util/database')
const {SERVER_PORT} = process.env

const {User} = require('./models/user')
const {PokemonTable} = require('./models/pokemontable')
const {UsersPokemon} = require('./models/userspokemon')


const express = require('express')
const cors = require('cors')




const {register, login} = require('./controllers/auth')
const {getPokemonTable, getPokemonTable2, getPokemonTable3} = require('./controllers/pokemontable')
const {getUsersPokemon, addPokemon, deleteUsersPokemon, getAllUsersPokemonAndMore, getEveryUsersPokemon} = require('./controllers/userspokemon')
const {isAuthenticated} = require('./middleware/isAuthenticated')

const app = express();

app.use(express.json())
app.use(cors())
//                                                                                                                                                                              //


User.hasMany(UsersPokemon)
UsersPokemon.belongsTo(User)

PokemonTable.hasMany(UsersPokemon)
UsersPokemon.belongsTo(PokemonTable)






//~AUTH
app.post('/register', register)
app.post('/login', login)



// //^ GET POSTS - for homepage, no auth required
app.get('/home', getPokemonTable)
app.get('/2', getPokemonTable2)
app.get('/3', getPokemonTable3)
app.get('/home/every', getEveryUsersPokemon)

// //* CRUD POSTS - auth required
app.get('/userspokemon/:userId', getUsersPokemon)
app.get('/userspokemonall/:userId', getAllUsersPokemonAndMore)
app.delete('/userspokemon/:id', deleteUsersPokemon)
app.post('/userspokemon', isAuthenticated, addPokemon)





sequelize.sync()
.then(() => {
app.listen(SERVER_PORT, () => console.log(`db sync successful & server running on port ${SERVER_PORT}`))})
.catch(err => console.log(err))