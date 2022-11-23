import { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
// import "./UsersPokemonDisplay.css";
import ProfileDisplayCard from './ProfileDisplayCard'
import AuthContext from "../../store/authContext";
import {NavLink} from 'react-router-dom'

 
 
 
 
 
 
 function UsersPokemonDisplay() {
    
const { token, userId } = useContext(AuthContext);


  const [usersPokemon, setUsersPokemon] = useState([]);
  const [search, setSearch] = useState('')
 


  const getUsersPokemon = useCallback(() => {
    axios.get(`/userspokemon/${userId}`)
    .then(res => setUsersPokemon(res.data))  
    .catch(err => console.log(err))
}, [userId])

useEffect(() => {
    getUsersPokemon()
}, [getUsersPokemon])




  
  const usersPokemonMapped = usersPokemon.filter((usersPokemon)=>{
    if (search === "") {
      return usersPokemon
    } else if (usersPokemon.pokemonName.toLowerCase().includes(search.toLowerCase())){
      return usersPokemon
    }
  }).map((usersPokemon) => {
    return <ProfileDisplayCard usersPokemon={usersPokemon} />;
  });

   
  
  

  return <div className="mockdisplay">
      <input type="text" placeholder="search.." onChange={e => setSearch(e.target.value)}></input>
  
      <NavLink to='AllPokemonDisplayed'>All Pokemon Displayed</NavLink>
    {usersPokemonMapped}
    
    </div>;
}
 
export default UsersPokemonDisplay;
