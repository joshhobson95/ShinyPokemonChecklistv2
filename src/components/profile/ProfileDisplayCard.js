import "./ProfileDisplayCard.css";
import {  useContext} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import AuthContext from "../../store/authContext";



function ProfileDisplayCard({ usersPokemon }) {

  const { token } = useContext(AuthContext);

  const deleteUsersPokemon = (id) => {
    axios
      .delete(`/userspokemon/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then(() => {
        Swal.fire({
          title: "Your Pokemon was deleted",
          confirmButtonColor: "rgb(210, 161, 12)",
          customClass: "buttonalert",
          confirmButtonText: "Thanks", 
        })
        .finally(()=>window.location.reload(false))
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <div className="card2">
        <div className="profilecontainer">
      <h2>{usersPokemon.pokemonName.toUpperCase()}</h2>
      <h2>{usersPokemon.pokemonNickname ? (<p>a.k.a "{usersPokemon.pokemonNickname}"</p>) : ("") }</h2>
      <h2>{usersPokemon.pokemonTableId}</h2>
      is residing in
      <h3>{usersPokemon.pokemonGameFound}</h3>
      <div className="mandg">
      {usersPokemon.pokemonMega ? (
        <div className="mega">
        <img className="megastone"alt="megastone" src="https://i.redd.it/hbi5akkwov551.png"/>
        <p>can Mega Evolve</p>
        </div>
      ): (<p></p>)}
     {usersPokemon.pokemonGmax ? (
        <div className="gmax">
        <img className="gmaxband"alt="gmaxband" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffv4gc-26ecc0c6-34dd-49ec-a93a-7360dd5a95fc.png/v1/fill/w_894,h_894,strp/gigantamax_icon_by_jormxdos_dffv4gc-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdjRnYy0yNmVjYzBjNi0zNGRkLTQ5ZWMtYTkzYS03MzYwZGQ1YTk1ZmMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jovCIh7RNz9XgZZUHiKiG7yZsDjtekNEXPp7uzlhZcI"/>
        <p>can Gigantamax</p>
        </div>
      ): (<p></p>)}
      </div>
      <img className="pkmnimg"alt="Shiny Pokemon" src={usersPokemon.pokemonShinyImg} />
     <br></br>
      <button className="deletepokemon" onClick={() => deleteUsersPokemon(usersPokemon.id)}>
        Delete Pokemon
      </button>
      </div>
    </div>
  );
}

export default ProfileDisplayCard;
