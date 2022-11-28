import { useState, useEffect } from "react";
import "./Home.css";
import MockDisplay from "./mockdisplay/MockDisplay";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Home() {
  const [everyUsersPokemon, setEveryUsersPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("/home/every")
      .then((res) => {
        setEveryUsersPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home">
      <h1>Welcome to the shiny Pokemon Checklist</h1>

      <p>
        Below is a list of all Pokemon available across every game. You can
        choose Pokemon that you have found shiny and add them to your personal
        Shiny Pokemon Checklist! Simply fill out any information inside each
        card that applies and hit the Add Pokemon Button!
      </p>

      <p>Lastest Wiki Update was 11/27/22</p>

      <br></br>
      <br></br>
      <br></br>

      <p>Total Number of Shinies Registered across all accounts:</p>
      <h2>{everyUsersPokemon.length}</h2>

      <NavLink to='/' exact={true}
        style={({ isActive }) =>
        isActive
          ? {
              color: '#fff',
              textDecoration: "none",
              fontWeight: "1000",
              fontSize : "16pt",
              backgroundColor: "rgb(0, 0, 0)",
               
              
            }
          : { 
            color: '#fff',
            textDecoration: "none",
            fontWeight: "1000",
            fontSize : "16pt",
            
        }}>Gens 1-3|</NavLink>
       <NavLink to='/2' exact={true}
        style={({ isActive }) =>
        isActive
          ? {
              color: '#fff',
              textDecoration: "none",
              fontWeight: "1000",
              fontSize : "16pt",
              backgroundColor: "rgb(0, 0, 0)",
               
              
            }
          : { 
            color: '#fff',
            textDecoration: "none",
            fontWeight: "1000",
            fontSize : "16pt",
            
        }}>Gens 4-6|</NavLink>
       <NavLink to='/3' exact={true}
        style={({ isActive }) =>
        isActive
          ? {
              color: '#fff',
              textDecoration: "none",
              fontWeight: "1000",
              fontSize : "16pt",
              backgroundColor: "rgb(0, 0, 0)",
               
              
            }
          : { 
            color: '#fff',
            textDecoration: "none",
            fontWeight: "1000",
            fontSize : "16pt",
            
        }}>Gens 5-9</NavLink>

      <MockDisplay />
    </div>
  );
}

export default Home;
