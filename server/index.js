require('dotenv').config();
const {sequelize} = require('./util/database')
const {SERVER_PORT} = process.env

const {User} = require('./models/user')
const {PokemonTable} = require('./models/pokemontable')
const {UsersPokemon} = require('./models/userspokemon')


const express = require('express')
const cors = require('cors')




const {register, login} = require('./controllers/auth')
const {getPokemonTable} = require('./controllers/pokemontable')
const {getUsersPokemon, addPokemon} = require('./controllers/userspokemon')
const {isAuthenticated} = require('./middleware/isAuthenticated')

const app = express();

app.use(express.json())
app.use(cors())
//                                                                                                                                                                              //

// User.hasMany(PokemonTable)
// PokemonTable.belongsTo(User)

User.hasMany(UsersPokemon)
UsersPokemon.belongsTo(User)

PokemonTable.hasMany(UsersPokemon)
UsersPokemon.belongsTo(PokemonTable)






//~AUTH
app.post('/register', register)
app.post('/login', login)



// //^ GET POSTS - for homepage, no auth required
app.get('/home', getPokemonTable)

// //* CRUD POSTS - auth required
app.get('/userspokemon/:userId', getUsersPokemon)
app.post('/userspokemon', isAuthenticated, addPokemon)

// app.put('/posts/:id', isAuthenticated, editPost)
// app.delete('/posts/:id', isAuthenticated, deletePost)

// sequelize.sync({ force: true }) this wipes all the data clean, users and posts, which could be nice to delete tests. replace sync below
sequelize.sync()
.then(() => {
app.listen(SERVER_PORT, () => console.log(`db sync successful & server running on port ${SERVER_PORT}`))})
.catch(err => console.log(err))