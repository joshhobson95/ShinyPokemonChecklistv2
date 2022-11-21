import './Header.css'
import { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import SocialCard from '../loginpage/SocialCard'


import AuthContext from '../../store/authContext'

function Header () {
    const authCtx = useContext(AuthContext)


    return (
        <header>
 <h1>Shiny Pokemon Checklist</h1>


 <div className='navlinks'>
        <div>
            <NavLink to='/'>Home</NavLink>
        </div>
        <div >
        <NavLink to='/auth'>Login or Signup</NavLink>
        </div>
        <div>
        <NavLink to='/wiki'>Shiny Hunting Methods Wiki</NavLink>
        </div>
        <div>
        <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div>
            <SocialCard />
        </div>

        <div>
        <button className='logout-btn' onClick={() => authCtx.logout()}>Logout</button>
        </div>
 </div>
        </header>
    )
}
export default Header;