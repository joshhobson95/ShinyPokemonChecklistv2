import { useState, useEffect } from 'react'
import './Home.css'
import MockDisplay3 from './mockdisplay/MockDisplay3'
import axios from 'axios'
import { NavLink } from 'react-router-dom'





function Home3() {


  const [everyUsersPokemon, setEveryUsersPokemon] = useState([])


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


    <div className='home'>

        <h1>Welcome to the shiny Pokemon Checklist</h1>

        <p> This Checklist below is just an exmaple! If you would like to save your selection, please create an account and head to your profile Page in order to save your personal Checklist</p>
       <p>Random 6 </p>
       <p>Gen 9 Dex</p>
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
            
        }}>Gens 5-9|</NavLink>


     

      <MockDisplay3 />


   
    </div>
  )
}

export default Home3;