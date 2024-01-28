import React from 'react';
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <div className="logosec">
        <div className="logo">CyBros</div> 
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Search" /> 
        <div className="searchbtn"> 
          <FontAwesomeIcon icon={faSearch} className="icn srchicn" alt="search-icon" style={{ color: 'white' }}/>
        </div> 
      </div>
      <div className="message">
        <div className="circle"></div> 
        <div className="dp"> 
          <FontAwesomeIcon icon={faBell} className="dpicn" alt="notification" /> 
          <FontAwesomeIcon icon={faUser} className="dpicn" alt="user-profile" /> 
        </div> 
      </div>
    </header>
  );
}

export default Header;
