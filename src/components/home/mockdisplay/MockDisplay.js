import { useState, useEffect } from "react";
import axios from "axios";
import "./MockDisplay.css";
import MockDisplayCard from "./MockDisplayCard";




function MockDisplay() {


  const [pokemonTable, setPokemonTable] = useState([]);

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


  const mappedPokemonTable = pokemonTable.map((pokemonTable) => {
    return <MockDisplayCard pokemonTable={pokemonTable} />;
  });

  return <div className="mockdisplay">{mappedPokemonTable}</div>;
}

export default MockDisplay;
