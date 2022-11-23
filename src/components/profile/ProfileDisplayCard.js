// import DropDownGameSelect from "./DropDownGameSelect";
// import "./ProfileDisplayCard.css";
import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AuthContext from "../../store/authContext";

function ProfileDisplayCard({ usersPokemon }) {
  const { userId, token } = useContext(AuthContext);

  const deleteUsersPokemon = (id) => {
    axios
      .delete(`/userspokemon/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then(() => {
        alert("pokemon deleted");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <div className="card">
      <p>{usersPokemon.id}</p>
      <h2>{usersPokemon.pokemonName}</h2>
      <h2>{usersPokemon.pokemonNickname}</h2>
      <h2>{usersPokemon.pokemonTableId}</h2>
      is residing in
      <h3>{usersPokemon.pokemonGameFound}</h3>
      <img alt="pokemonshiny" src={usersPokemon.pokemonShinyImg} />
     <br></br>
      <button onClick={() => deleteUsersPokemon(usersPokemon.id)}>
        Delete Pokemon
      </button>
    </div>
  );
}

export default ProfileDisplayCard;
