import { useState, useEffect } from "react";
import axios from "axios";
import "./MockDisplay.css";
import MockDisplayCard from "./MockDisplayCard";




function MockDisplay() {


  const [pokemonTable, setPokemonTable] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios
      .get("/home")
      .then((res) => {
        setPokemonTable(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const mappedPokemonTable = pokemonTable.filter((pokemonTable=> {
if (search === "") {
  return pokemonTable
} else if (pokemonTable.pokemonName.toLowerCase().includes(search.toLowerCase())){
  return pokemonTable
}
  })).map((pokemonTable) => {
    return <MockDisplayCard pokemonTable={pokemonTable} />;
  });  




  return( <div className="mockdisplay">
     <input type="text" placeholder="search.." onChange={e => setSearch(e.target.value)}></input>
    {mappedPokemonTable}
    </div>);
}

export default MockDisplay;
