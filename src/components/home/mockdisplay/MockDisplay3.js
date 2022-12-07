import { useState, useEffect } from "react";
import axios from "axios";
import "./MockDisplay.css";
import MockDisplayCard3 from "./MockDisplayCard3";
import LoadingImg from '../../../assets/LoadingGif.gif'




function MockDisplay3() {


  const [pokemonTable3, setPokemonTable3] = useState([]);
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios
      .get("/3")
      .then((res) => {
        setPokemonTable3(res.data);
     
      })
      .finally(() =>setLoading(false))
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const mappedPokemonTable3 = pokemonTable3.filter((pokemonTable3=> {
if (search === "") {
  return pokemonTable3
} else if (pokemonTable3.pokemonName.toLowerCase().includes(search.toLowerCase())){
  return pokemonTable3
}
  })).map((pokemonTable3) => {
    return <MockDisplayCard3 pokemonTable3={pokemonTable3} />;
  });  




  return( 
    <div className={loading ? "loadingz":"mockdisplay"}>
       <input className="searchbar"type="text" placeholder="Search for a Pokemon..." onChange={e => setSearch(e.target.value)}></input>
       {loading ? (
        <img className="loading" alt="Loading..."src={LoadingImg} />
       ) : ( 
        <div className="mockdisplay">
      {mappedPokemonTable3}
        </div>
       )}
      </div>);
  }

export default MockDisplay3;
