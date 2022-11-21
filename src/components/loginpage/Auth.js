import {useState, useContext} from 'react'
import axios from 'axios'
import './Auth.css'


import AuthContext from '../../store/authContext'
 
const Auth = () => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [email, setEmail] = useState('')
   const [profilepicture, setProfilePicture] = useState('')
   const [register, setRegister] = useState(true)
 
    const authCtx = useContext(AuthContext);

   const submitHandler = e => {
       e.preventDefault()
       console.log('submitHandler called')
       
        const body = {
            username,
            password, 
            email, 
            profilepicture
        }
        const url = 'http://localhost:5050'

        axios.post(register ? `${url}/register` : `${url}/login`, body)
            .then((res) => {
                console.log('AFTER AUTH', res.data)
                authCtx.login(res.data.token, res.data.exp, res.data.userId)
            })
            .catch(error => {
                setUsername('')
                setPassword('')
                setEmail('')
                console.log('ERROR')
                alert('Cannot Reach Server')
            })




    }

   

   return (
       <main className='loginform'>
           <h1>Welcome!</h1>
           <form className='form auth-form' onSubmit={submitHandler}>
               <input
                type='text'
                placeholder='username'
                value={username}
                onChange={e => setUsername(e.target.value)}
                   className='form-input'/>
                   
               <input
                type='password'
                placeholder='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                   className='form-input'/>

               <input
                type='email'
                placeholder='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                   className='form-input'/>
               <input
                type='profilepicture'
                placeholder='Paste IMG url for Profile Picture'
                value={profilepicture}
                onChange={e => setProfilePicture(e.target.value)}
                   className='form-input'/>
                   
               <button className='form-btn'>
                   {register ? 'Sign Up' : 'Login'}
               </button>
           </form>
           <button className='form-btn' onClick={() => setRegister(!register)}>Need to {register ? 'Login' : 'Sign Up'}?</button>

            


        





       </main>

   )
}
 
export default Auth