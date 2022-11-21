import React from "react";
import DropDownGameSelect from "./DropDownGameSelect";
import "./MockDisplayCard.css";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../../store/authContext";

function MockDisplayCard({ pokemonTable }) {
  const { token, userId } = useContext(AuthContext);
  const navigate = useNavigate();

  const [pokemonQuantity, setPokemonQuantity] = useState(0);
  const [pokemonGameFound, setPokemonGameFound] = useState("")
  const [pokemonMega, setPokemonMega] = useState(false);
  const [pokemonGmax, setPokemonGmax] = useState(false);
  const [idSpecial, setIdSpecial] = useState(0);
  const [pokemontableId, setPokemonTableId] = useState(0)










  const handleSubmit = (e) => {
    e.preventDefault();

   


    axios
      .post(
        "/userspokemon",
        {
          idSpecial,
          pokemonQuantity,  
          pokemonGameFound,
          pokemonMega,
          pokemonGmax,
          userId,
          pokemontableId: pokemonTable.id,
        },
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then(() => {
        console.log("sucess")
        //*Add an added Message!
      })
      .catch((err) => console.log(err));
  };




  return (
    <div className="card">
      <form className="form-pokemon-card" >
        <div key={pokemonTable.id}>
          <h3>{pokemonTable.id}</h3>
          <h2>{pokemonTable.pokemonName}</h2>
          <img alt="pokemon images" src={pokemonTable.pokemonImg} />
          <img alt="shiny pokemon images" src={pokemonTable.pokemonShinyImg} />
     

          <DropDownGameSelect onSelect={e => setPokemonGameFound(e.target.value)} /> 

          <label for="Mega">Mega Evolution</label>
          <input type="checkbox" id="Mega" name="Mega" onChange={e => setPokemonMega(e.target.value)}/>
          <label for="Gmax">Gmax </label>
          <input type="checkbox" id="Gmax" name="Gmax" onChange={e => setPokemonGmax(e.target.value)}/>


          <input type="button" onClick={() => setPokemonQuantity +1} 
            placeholder="add" value="add"/>
          <input type="button"/>
        </div>
        <button onClick={handleSubmit} >Submit</button>
      </form>
    </div>
  );
}

export default MockDisplayCard;
