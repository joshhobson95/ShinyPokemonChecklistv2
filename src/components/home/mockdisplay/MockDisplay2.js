import { useState, useEffect } from "react";
import axios from "axios";
import "./MockDisplay.css";
import MockDisplayCard2 from "./MockDisplayCard2";
import LoadingImg from '../../../assets/LoadingGif.gif'




function MockDisplay2() {


  const [pokemonTable2, setPokemonTable2] = useState([]);
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios
      .get("/2")
      .then((res) => {
      setPokemonTable2(res.data);
        
      })
      .finally(() =>setLoading(false))
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const mappedPokemonTable2 = pokemonTable2.filter((pokemonTable2=> {
if (search === "") {
  return pokemonTable2
} else if (pokemonTable2.pokemonName.toLowerCase().includes(search.toLowerCase())){
  return pokemonTable2
}
  })).map((pokemonTable2) => {
    return <MockDisplayCard2 pokemonTable2={pokemonTable2} />;
  });  




  return( 
    <div className="mockdisplay">
       <input type="text" placeholder="search.." onChange={e => setSearch(e.target.value)}></input>
       {loading ? (
        <img className="loading" alt="Loading..."src={LoadingImg} />
       ) : ( 
        <div className="mockdisplay">
      {mappedPokemonTable2}
        </div>
       )}
      </div>);
  }

export default MockDisplay2;
