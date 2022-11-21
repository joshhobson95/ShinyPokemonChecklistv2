import { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
// import "./UsersPokemonDisplay.css";
import ProfileDisplayCard from './ProfileDisplayCard'
import AuthContext from "../../store/authContext";

 
 
 
 
 
 
 function UsersPokemonDisplay() {
    
const { token, userId } = useContext(AuthContext);


  const [usersPokemon, setUsersPokemon] = useState([]);


  const getUsersPokemon = useCallback(() => {
    axios.get(`/userspokemon/${userId}`)
    .then(res => setUsersPokemon(res.data))  
    .catch(err => console.log(err))
}, [userId])

useEffect(() => {
    getUsersPokemon()
}, [getUsersPokemon])


console.log(usersPokemon.userId)
console.log(usersPokemon)
  
  const usersPokemonMapped = usersPokemon.map((usersPokemon) => {
    return <ProfileDisplayCard usersPokemon={usersPokemon} />;
  });

  return <div className="mockdisplay">{usersPokemonMapped}</div>;
}
 
export default UsersPokemonDisplay;
