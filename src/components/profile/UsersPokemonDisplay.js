import { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";

import ProfileDisplayCard from './ProfileDisplayCard'
import AuthContext from "../../store/authContext";
import {NavLink} from 'react-router-dom'
import LoadingImg from '../../assets/LoadingGif.gif'
 
 
 
 
 
 
 function UsersPokemonDisplay() {
    
const { userId } = useContext(AuthContext);

  const [loading, setLoading] = useState(true)
  const [usersPokemon, setUsersPokemon] = useState([]);
  const [search, setSearch] = useState('')
 


  const getUsersPokemon = useCallback(() => {
    axios.get(`/userspokemon/${userId}`)
    .then(res => setUsersPokemon(res.data))  
    .catch(err => console.log(err))
    .finally(() =>setLoading(false))
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

   
  
  

  return (
    <div className={loading ? "loadingz":"mockdisplay"}>
      <div className="mockdisplay2">
      <input className="searchbar2" type="text" placeholder="search.." onChange={e => setSearch(e.target.value)}></input>
      <NavLink   style={({ isActive }) => ({
    color: "white",
    backgroundColor: "black",
    textDecoration: "none",
    fontWeight: 700,
    
  
  })}
  to='AllPokemonDisplayed'>Click here to see your progress</NavLink>
      </div>

  {loading ? (
    <img className="loading" alt="Loading..."src={LoadingImg} />
  ) : (
    <div className="mockdisplay">
      {usersPokemonMapped}
    </div>
  )}
    
    </div>
)
}
 
export default UsersPokemonDisplay;
