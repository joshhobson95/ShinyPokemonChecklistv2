
import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom'
import { useContext } from 'react';
import Header from './components/header/Header'
import Home from './components/home/Home';
import Auth from './components/loginpage/Auth';
import Profile from './components/profile/Profile';
import Wiki from './components/wiki/Wiki';
import AuthContext from './store/authContext'; 





function App() {

const authCtx = useContext(AuthContext);



  return (
    <div className="App">
        <Header />
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/wiki' element={<Wiki />} />
         <Route path='/auth' element={!authCtx.token ? <Auth/> : <Navigate to='/'/>}/>
         <Route path='/profile' element={authCtx.token ? <Profile/> : <Navigate to='/auth'/>}/>
       
         
    
         
        </Routes>
      

    </div>
  )
}

export default App;