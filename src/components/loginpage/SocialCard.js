import {useState, useEffect} from 'react'
import axios from 'axios';
import './SocialCard.css'

function SocialCard({username, email, profilepicture}) {

  const [userinfo, setUserInfo] = useState('')

  useEffect(() => {
    axios
      .get("/login")
      .then((res) => {
        setUserInfo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    


    <div>
      <p>{userinfo}</p>
      <h2>{username}</h2>
      <p>{email}</p>
      <img className='profilepic' alt="URL added for you profile"src={profilepicture}/>

    </div>
  )
}

export default SocialCard