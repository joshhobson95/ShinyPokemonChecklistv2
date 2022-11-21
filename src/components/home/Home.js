// import {useState, useEffect} from 'react'
// import axios from 'axios'
import './Home.css'
import MockDisplay from './mockdisplay/MockDisplay'

// import AuthContext from '../store/authContext'



function Home() {

  
  return (


    <div className='home'>

        <h1>Welcome to the shiny Pokemon Checklist</h1>

        <p> This Checklist below is just an exmaple! If you would like to save your selection, please create an account and head to your profile Page in order to save your personal Checklist</p>
       <p>Random 6 </p>
       <p>Gen 9 Dex</p>
       <p>Total Number of Shinies Registered across all accounts</p>

      <MockDisplay />


   
    </div>
  )
}

export default Home