import React from "react";
// import DropDownGameSelect from "./DropDownGameSelect";
// import "./ProfileDisplayCard.css";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function ProfileDisplayCard({ usersPokemon }) {















  return (
    <div className="card">
        <h2>{usersPokemon.pokemonName}</h2>
        <h2>{usersPokemon.pokemonNickname}</h2>
        <img alt="pokemonshiny" src={usersPokemon.pokemonShinyImg}/>

    </div>
  );
}

export default ProfileDisplayCard;
