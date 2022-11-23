import {useState, useEffect, useCallback, useContext} from 'react'
import './ProfileAllDisplayed.css'
import AllCard from './AllCard';
import axios from 'axios'
import AuthContext from "../../store/authContext";

function ProfileAllDisplayed() {

  const { userId, token } = useContext(AuthContext);
 const [usersPokemonAll, setUsersPokemonAll] = useState([])
 const [search, setSearch] = useState("")


//Different Get Rqerst with Users Pokemon Laid on top of all other pokemon. 

const getUsersPokemonAll = useCallback(() => {
  axios.get(`/userspokemonall/${userId}`)
  .then(res => setUsersPokemonAll(res.data))  
  .catch(err => console.log(err))
}, [userId])

useEffect(() => {
  getUsersPokemonAll()
}, [getUsersPokemonAll])

const usersPokemonAllMapped = usersPokemonAll.filter((usersPokemonAll)=>{
  if (search === "") {
    return usersPokemonAll
  } else if (usersPokemonAll.pokemonName.toLowerCase().includes(search.toLowerCase())){
    return usersPokemonAll
  }
}).map((usersPokemonAll) => {
  return <AllCard usersPokemonAll={usersPokemonAll} />;
});




  return (
    <div className='a'>
      <input type="text" placeholder="search.." onChange={e => setSearch(e.target.value)}></input>
      ProfileAllDisplayed
      {usersPokemonAllMapped}
      </div>
  )
}

export default ProfileAllDisplayed