import './Header.css'
import { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import Swal from 'sweetalert2'
import  Logo from '../../assets/FinalLoad.png'
import AuthContext from '../../store/authContext'


function Header () {
    const authCtx = useContext(AuthContext)

const logout = () => {
  Swal.fire({
    title: "You have been logged out",
    confirmButtonColor: "rgb(210, 161, 12)",
    customClass: "buttonalert",
    confirmButtonText: "Ok"
  })
authCtx.logout()
}
    return (
        <header>
<div className='banner'>
 <img alt="logo" className="logo"src={Logo}/>
 <h1 className='title'>Shiny Pokemon Checklist</h1>
</div>
 <div className='navlinks'>
        <div>
            <NavLink to='/'
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
            }}
           >Home </NavLink>
        </div>
        <div >
        <NavLink to='/auth'
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
            }}
        >Login or Signup</NavLink>
        </div>
        <div>
        <NavLink to='/wiki'
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
        }}
        >Shiny Hunting  Wiki</NavLink>
        </div>
        <div>
        <NavLink to='/profile'
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
            borderRadius: '30%'           
        }}>Profile</NavLink>
        </div>
        <div>
        <button className='logout-btn' onClick={() => logout()} >Logout</button>
        </div>
 </div>
        </header>
    )
}

export default Header;