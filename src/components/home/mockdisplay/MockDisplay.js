import { useState, useEffect } from "react";
import axios from "axios";
import "./MockDisplay.css";
import MockDisplayCard from "./MockDisplayCard";
import LoadingImg from '../../../assets/LoadingGif.gif'




function MockDisplay() {


  const [pokemonTable, setPokemonTable] = useState([]);
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios
      .get("/home")
     
      .then((res) => {
        setPokemonTable(res.data);
        console.log(res.data)
        
      })
      .finally(() =>setLoading(false))
      .catch((err) => {
        console.log(err);
      });
  }, []);


console.log(pokemonTable)

  const mappedPokemonTable = pokemonTable?.filter((pokemonTable=>  {
if (search === "") {
  return pokemonTable
} else if (pokemonTable.pokemonName.toLowerCase().includes(search.toLowerCase())){
  return pokemonTable
}
  })).map((pokemonTable) => {
    return <MockDisplayCard pokemonTable={pokemonTable} />;
  });  




  return( 
  <div className={loading ? "loadingz":"mockdisplay"}>
     <input  className="searchbar" type="text" placeholder="Search for a Pokemon..."  onChange={e => setSearch(e.target.value)}></input>
     {loading ? (
      <img className="loading" alt="Loading..."src={LoadingImg} />
     ) : ( 
      <div className="mockdisplay">
    {mappedPokemonTable}
      </div>
     )}
    </div>);
}

export default MockDisplay;
