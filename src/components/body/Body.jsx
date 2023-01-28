import React, { useEffect, useState } from 'react';
import './body.scss';
import location from "../../assets/icon-location.svg";
import twitter from "../../assets/icon-twitter.svg";
import website from "../../assets/icon-website.svg";
import company from "../../assets/icon-company.svg";
import profile from "../../assets/profile-icon.png"
import axios from "axios"

 
const Body = () => {
  const [userData,setUserData] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://api.github.com/users/rasulzeynal");
      setUserData(res.data);
    };
    fetchData();
  },[])
  console.log(userData);
  return (
    <div className='body'>
      <div className='profile-photo'>
        <img src={userData.avatar_url} alt='profile photo'/>
      </div>
      <div className='info'>
        <div className='name'>
          <h2>{userData.name}</h2>
          <p>{userData.created_at}</p>
        </div>
        <div className='github-name'>@{userData.login}</div>
        <div className='bio'>{`${userData.bio ? userData.bio : "This profile has no bio "}`}</div>
        <div className='followers'>
          <div >
            <p className='title'>Repos</p>
            <p className='count'>{`${userData.public_repos ? userData.public_repos : "0"}`}</p>
          </div>
          <div >
            <p className='title'>Folowers</p>
            <p className='count'>{`${userData.followers ? userData.followers : "0"}`}</p>
          </div>
          <div >
            <p className='title'>Following</p>
            <p className='count'>{`${userData.following ? userData.following : "0"}`}</p>
          </div>
        </div>
        <div className='footer'>
          <div className='left'>
            <div className={`${userData.location ? "" : "not-available"}`}>
              <img src={location} alt="location icon"/>
              <p>{`${userData.location ? userData.location : "Not Available"}`}</p>
            </div>
            <div className={`${userData.login ? "" : "not-available"}`}>
              <img src={website} alt="website icon"/>
              <p>{`${userData.login
 ? userData.login
 : "Not Available"}`}</p>
            </div>
          </div>
          <div className='right'>
          <div className={`${userData.twitter_username? "" : "not-available"}`}>
              <img src={twitter} alt="twitter icon"/>
              <p>{`${userData.twitter_username
 ? userData.twitter_username
 : "Not Available"}`}</p>
            </div>
            <div className={`${userData.blog ? "" : "not-available"}`}>
              <img src={company} alt="company icon"/>
              <p>{`${userData.blog
 ? userData.blog
 : "Not Available"}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body