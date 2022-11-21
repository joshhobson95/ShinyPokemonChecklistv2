import React from "react";
// import DropDownGameSelect from "./DropDownGameSelect";
// import "./ProfileDisplayCard.css";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function ProfileDisplayCard({ usersPokemon }) {















  return (
    <div className="card">
        <h2>{usersPokemon.pokemontableId}</h2>

    </div>
  );
}

export default ProfileDisplayCard;
