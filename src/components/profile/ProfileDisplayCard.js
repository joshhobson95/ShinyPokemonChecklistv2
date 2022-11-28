
import "./ProfileDisplayCard.css";
import {  useContext} from "react";
import axios from "axios";
import Swal from "sweetalert2";
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
        Swal.fire("Your Pokemon was Deleted")
        // setTimeout(2000)
        .finally(()=>window.location.reload(false))
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <div className="card">
      
      <h2>{usersPokemon.pokemonName.toUpperCase()}</h2>
      
      <h2>{usersPokemon.pokemonNickname}</h2>
      <h2>{usersPokemon.pokemonTableId}</h2>
      is residing in
      <h3>{usersPokemon.pokemonGameFound}</h3>
      
      <img alt="Shiny Pokemon" src={usersPokemon.pokemonShinyImg} />
     <br></br>
      <button onClick={() => deleteUsersPokemon(usersPokemon.id)}>
        Delete Pokemon
      </button>
    </div>
  );
}

export default ProfileDisplayCard;
