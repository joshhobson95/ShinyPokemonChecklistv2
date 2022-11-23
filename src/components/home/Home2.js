import { useState, useEffect } from 'react'
import './Home.css'
import MockDisplay2 from './mockdisplay/MockDisplay2'
import axios from 'axios'
import { NavLink } from 'react-router-dom'





function Home2() {


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
      

       <NavLink to='/' exact={true}>Gens 1-3</NavLink>
       <NavLink to='/2' exact={true}>Gens 4-6</NavLink>
       <NavLink to='/3' exact={true}>Gens 5-9, including Regional Forms</NavLink>

     
<MockDisplay2 />
      


   
    </div>
  )
}

export default Home2;