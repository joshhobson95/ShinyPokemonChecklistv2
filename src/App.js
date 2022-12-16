import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom';
import { useContext } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Home2 from './components/home/Home2';
import Home3 from './components/home/Home3';
import Auth from './components/loginpage/Auth';
import Profile from './components/profile/Profile';
import Wiki from './components/wiki/Wiki';
import ProfileAllDisplayed from './components/profile/ProfileAllDisplayed';
import AuthContext from './store/authContext'; 
import Footer from './components/footer/Footer';



function App() {

const authCtx = useContext(AuthContext);



  return (
    <div className="App">
        <Header />
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path="/2" element={<Home2 />} />
         <Route path="/3" element={<Home3 />} />
         <Route path='/wiki' element={<Wiki />} />
         <Route path='/auth' element={!authCtx.token ? <Auth/> : <Navigate to='/'/>}/>
         <Route path='/profile' element={authCtx.token ? <Profile/> : <Navigate to='/auth'/>}/>
         <Route path='profile/AllPokemonDisplayed' element={authCtx.token ? <ProfileAllDisplayed />: <Navigate to='/auth'/>} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App;