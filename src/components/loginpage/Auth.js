import {useState, useContext} from 'react'
import axios from 'axios'
import './Auth.css'
import Swal from 'sweetalert2'
import AuthContext from '../../store/authContext'


 
const Auth = () => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [email, setEmail] = useState('')
   const [register, setRegister] = useState(true)

    const authCtx = useContext(AuthContext);

   const submitHandler = e => {
       e.preventDefault()
       console.log('submitHandler called')
        const body = {
            username,
            password, 
            email, 
        }
        const url = 'http://localhost:5050'
        axios.post(register ? `${url}/register` : `${url}/login`, body)
            .then((res) => {
                console.log('AFTER AUTH', res.data)
                authCtx.login(res.data.token, res.data.exp, res.data.userId)
                Swal.fire({
                    title: "Welcome",
                    confirmButtonColor: "rgb(210, 161, 12)",
                    customClass: "buttonalert",
                    confirmButtonText: "Thanks"           
                  })
            })
            .catch(error => {
                setUsername('')
                setPassword('')
                setEmail('')
                console.log('ERROR')
                Swal.fire({
                    title: "Error creating your account, please try again",
                    confirmButtonColor: "red",
                    customClass: "buttonalert",
                    confirmButtonText: "Ok"           
                  })
            })
    }

   

   return (
       <main className='loginform'>
        {register ? (
            <form className='form-auth-form' onSubmit={submitHandler}>
        <h1>Sign Up</h1>
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
    <button className='form-btn'>
        {register ? 'Sign Up' : 'Login'}
    </button>
</form>
        ) : (
            <form className='form-auth-form' onSubmit={submitHandler}>
                <h1>Login</h1>
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
            <button className='form-btn'>
                {register ? 'Sign Up' : 'Login'}
            </button>
        </form>
        )}
           <button className='form-btn2' onClick={() => setRegister(!register)}>Need to {register ? 'Login' : 'Sign Up'}?</button>
       </main>
   )
}
 
export default Auth