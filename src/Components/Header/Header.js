import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser, faWandSparkles, faHandSparkles, faMagnifyingGlass, faMagnifyingGlassPlus, faAssistiveListeningSystems, faGear, faCropSimple, faFileCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <div className="navbar-logosec">
        <div className="navbar-logo">CyBros</div>
      </div>
      <div className="navbar-items-container">
        <div className='navbar-item'>
          <div className="navbar-item-icon">
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="icn " alt="search-icon" style={{ color: 'gray' }} />
          </div>
          <div className="navbar-item-text">
            New Scan  
          </div>
        </div>
        <div className='navbar-item'>
          <div className="navbar-item-icon">
            <FontAwesomeIcon icon={faFileCircleCheck} className="icn " alt="search-icon" style={{ color: 'gray' }} />
          </div>
          <div className="navbar-item-text">
            Scanned
          </div>
        </div>
        <div className='navbar-item'>
          <div className="navbar-item-icon">
            <FontAwesomeIcon icon={faGear} className="icn " alt="search-icon" style={{ color: 'gray' }} />
          </div>
          <div className="navbar-item-text">
            Settings
          </div>
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
