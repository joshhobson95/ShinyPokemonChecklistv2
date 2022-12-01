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


    <div className="home">
    <h1>Welcome to the shiny Pokemon Checklist</h1>

    <p>
      Below is a list of all Pokemon available across every game. You can
      choose Pokemon that you have found shiny and add them to your personal
      Shiny Pokemon Checklist! Simply fill out any information that applies and hit the Add Pokemon Button!
    </p>

    <br></br>
    <br></br>

    <h4>Lastest Wiki Update was 11/27/22</h4>

    <br></br>
    <br></br>
  <div className='numberof'>
    <h4>Total Number of Shinies Registered across all accounts:</h4>
    <div className="numbercontainer">
    <h1 className="numberofshinies">{everyUsersPokemon.length}</h1>
    </div>
  </div>
      
       
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