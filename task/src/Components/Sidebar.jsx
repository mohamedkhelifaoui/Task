import React from 'react';
import './Sidebar.css';
import Pic1 from '../Images/users.png'; 
import Pic2 from '../Images/smart-home.png';
import Pic3 from '../Images/exchange.png';
import Pic4 from '../Images/id.png';
import Pic5 from '../Images/bell.png';
import Pic6 from '../Images/message-report.png';
import Pic7 from '../Images/settings.png';
import Pic8 from '../Images/circle-dot.png';




const Sidebar = () => {
    return (
        <div className="sidebar">
          <div className="sidebar-header">
            <h2>OZ CORP</h2>
            <span><img  src={Pic8} alt='##'/></span>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-item">
              <a href="#dashboard">
                <span className="icon"><img src={Pic2} alt='##'/></span>
                <span className='texxt'>Dashboard</span>
                <span className="badge">5</span>
              </a>
            </li>
            <span className='applic'>APPLICATION</span>
            <li className="menu-item">
              <a href="#users">
                <span className="icon"><img src={Pic1} alt='##'/></span>
                <span className='texxt'>Users</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#transactions">
                <span className="icon"><img src={Pic3} alt='##'/></span>
                <span className='texxt'>Transactions</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#kyc-documents">
                <span className="icon"><img src={Pic4} alt='##'/></span>
                <span className='texxt'>KYC documents</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#notifications">
                <span className="icon"><img src={Pic5} alt='##'/></span>
                <span className='texxt'>Notifications</span>
                <span className="badge">48</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#tickets">
                <span className="icon"><img src={Pic6} alt='##'/></span>
                <span className='texxt'>Tickets</span>
              </a>
            </li>
            <li className="menu-item selected">
              <a href="#gestion-des-concessions">
                <span className="icon"><img src={Pic7} alt='##'/></span>
                <span className='texxt'>Gestion des concessions</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#parameters">
                <span className="icon"><img src={Pic7} alt='##'/></span>
                <span className='texxt'>Paramètres</span>
              </a>
            </li>
          </ul>
        </div>
      );
    };

export default Sidebar;





