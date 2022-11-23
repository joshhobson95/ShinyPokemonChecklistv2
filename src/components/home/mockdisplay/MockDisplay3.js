import { useState, useEffect } from "react";
import axios from "axios";
import "./MockDisplay.css";
import MockDisplayCard3 from "./MockDisplayCard3";




function MockDisplay3() {


  const [pokemonTable3, setPokemonTable3] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios
      .get("/3")
      .then((res) => {
        setPokemonTable3(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const mappedPokemonTable = pokemonTable3.filter((pokemonTable3=> {
if (search === "") {
  return pokemonTable3
} else if (pokemonTable3.pokemonName.toLowerCase().includes(search.toLowerCase())){
  return pokemonTable3
}
  })).map((pokemonTable3) => {
    return <MockDisplayCard3 pokemonTable3={pokemonTable3} />;
  });  




  return( <div className="mockdisplay">
     <input type="text" placeholder="search.." onChange={e => setSearch(e.target.value)}></input>
    {mappedPokemonTable}
    </div>);
}

export default MockDisplay3;
