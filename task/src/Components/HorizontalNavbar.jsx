  
import profilePic from '../Images/mask.png'; 

import React from 'react';
import './HorizontalNavbar.css';
import Pic7 from '../Images/settings.png';
import Pic5 from '../Images/bell.png';




const HorizontalNavbar = () => {
  return (
    <div className="horizontal-navbar">
      <div className='search-bar'></div>
      <div className="navbar-icons">
        <span className="icon"><img src={Pic7} alt='##'/></span>
        <span className="icon"><img src={Pic5} alt='##'/></span>
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
};

export default HorizontalNavbar;
