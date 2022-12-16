import React from "react";
import "./MockDisplayCard.css";
import { useState, useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import AuthContext from "../../../store/authContext";



function MockDisplayCard2({ pokemonTable2 }) {
  const { token, userId } = useContext(AuthContext);

  const options = [  
    { value: "Red", label: "Red" },
    { value: "Blue", label: "Blue" },
    { value: "Yellow", label: "Yellow" },
    { value: "Gold", label: "Gold" },
    { value: "Silver", label: "Silver" },
    { value: "Crystal", label: "Crystal" },
    { value: "Ruby", label: "Ruby" },
    { value: "Saphire", label: "Saphire" },
    { value: "Emerald", label: "Emerald" },
    { value: "FireRed", label: "Fire Red" },
    { value: "LeafGreen", label: "Leaf Green" },   
    { value: "Diamond", label: "Diamond" },
    { value: "Pearl", label: "Pearl" },
    { value: "Platinum", label: "Platinum" },
    { value: "HeartGold", label: "HeartGold" },
    { value: "SoulSilver", label: "SoulSilver" },   
    { value: "Black", label: "Black" },
    { value: "White", label: "White" },
    { value: "Black2", label: "Black 2" },
    { value: "White2", label: "White 2" },
    { value: "X", label: "X" },
    { value: "Y", label: "Y" },
    { value: "Omega Ruby", label: "Omega Ruby" },
    { value: "Alpha Saphire", label: "Alpha Saphire" },
    { value: "Sun", label: "Sun" },
    { value: "Moon", label: "Moon" },
    { value: "Ultra Sun", label: "Ultra Sun" },
    { value: "Ultra Moon", label: "Ultra Moon" },
    { value: "LGEevee", label: "Let's Go Eevee" },
    { value: "LGPikachu", label: "Let's Go Pikachu" },
    { value: "Sword", label: "Sword" },
    { value: "Shield", label: "Shield" },
    { value: "Brilliant Diamond", label: "Brilliant Diamond" },
    { value: "Shining Pearl", label: "Shining Pearl" },
    { value: "Legends Arceus", label: "Legends Arceus" }, 
    { value: "PokemonHome", label: "Pokemon Home" },
    { value: "Scarlet", label: "Scarlet" },
    { value: "Violet", label: "Violet" },
  ]

  const [pokemonQuantity, setPokemonQuantity] = useState(1);
  const [pokemonGameFound, setPokemonGameFound] = useState(options[0].value);
  const [pokemonMega, setPokemonMega] = useState(false);
  const [pokemonGmax, setPokemonGmax] = useState(false);
  const [pokemonNickname, setPokemonNickname] = useState("")
  const [idSpecial, setIdSpecial] = useState(0);

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
            pokemonNickname,
            userId,
            pokemontablePokemontableid: pokemonTable2.pokemontableid,     
          },
          {
            headers: {
              authorization: token,
            },
          }
        )
        .then(() => {
          console.log("sucess")
          Swal.fire({
            title: "Pokemon Added to your checklist",
            confirmButtonColor: "rgb(210, 161, 12)",
            customClass: "buttonalert",
            confirmButtonText: "Sweet!"
          })
        })
        .catch((err) => console.log(err));
       {!userId ? (Swal.fire({
        title: "You are not logged in!",
        confirmButtonColor: "Red",
        customClass: "buttonalert",
        confirmButtonText: "Ok"
      })) : (
        console.log('Your Good!')
       )}
  };
  const handleChange = event => {
  setPokemonGameFound(event.target.value)
  console.log(event.target.value)
}



return (
  <div className="card">
    <form className="pics-and-form" >
      <div key={pokemonTable2.pokemontableid}>
        <h2 className="pname">{pokemonTable2.pokemonName.toUpperCase()}</h2>
<div className="imgout">
        <div className="imgcontainer">
        <img alt="pokemon images" src={pokemonTable2.pokemonImg} />
        <img alt="shiny pokemon images" src={pokemonTable2.pokemonShinyImg} />
        </div>
</div>
<div className="form">
        <div>
  <select value={pokemonGameFound} onChange={handleChange}  pokemonGameFound={pokemonGameFound}>
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
</div>
        <label for="Mega">Mega Evolution</label>
        <input type="checkbox" id="Mega" name="Mega" onChange={e => setPokemonMega(e.target.value)}/>
        <label for="Gmax">Gmax </label>
        <input type="checkbox" id="Gmax" name="Gmax" onChange={e => setPokemonGmax(e.target.value)}/>
        <input type="text" id="Nickname" name="Nickname" placeholder="Pokemon's Nickname" onChange={e => setPokemonNickname(e.target.value)} />
      </div>
</div>
<button onClick={handleSubmit} className='addpokemon'>Add Pokemon</button>
    </form>
  </div>
);
}

export default MockDisplayCard2;
