import {useState, useEffect, useCallback, useContext} from 'react'
import './ProfileAllDisplayed.css'
import AllCard from './AllCard';
import axios from 'axios'
import AuthContext from "../../store/authContext";
import LoadingImg from '../../assets/LoadingGif.gif'

function ProfileAllDisplayed() {

  const { userId } = useContext(AuthContext);
 const [usersPokemonAll, setUsersPokemonAll] = useState([])
 const [loading, setLoading] = useState(true)
 const [search, setSearch] = useState("")



const getUsersPokemonAll = useCallback(() => {
  axios.get(`/userspokemonall/${userId}`)
  .then(res => setUsersPokemonAll(res.data))  
  .finally(() =>setLoading(false))
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

    {loading ? (
      <img className="loading" alt="Loading..."src={LoadingImg} />
    ) : (
      <div className='a'>
      {usersPokemonAllMapped}
      </div>
      )}
      </div>

  )
}

export default ProfileAllDisplayed