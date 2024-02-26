import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlassPlus, faGear, faFileCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function Header() {

  const navigate = useNavigate();
  const handleHomeNav = () => {
    navigate('/newscan');
  }
  const handleNewScan = () => {
    navigate('/newscan');
  }
  const handleScanned = () => {
    navigate('/scanned');
  }
  const handleSettings = () => {
    navigate('/settings');
  }
  return (
    <header>
      <div className='navbar-rightcontent'>
        <div className="navbar-logosec">
          <div className="navbar-logo" onClick={handleHomeNav}>OSINTika</div>
        </div>
        <div className="navbar-items-container">
          <div className='navbar-item' onClick={handleNewScan}>
            <div className="navbar-item-icon">
              <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="icn " alt="search-icon" style={{ color: 'gray' }} />
            </div>
            <div className="navbar-item-text">
              New Scan
            </div>
          </div>
          <div className='navbar-item' onClick={handleScanned}>
            <div className="navbar-item-icon">
              <FontAwesomeIcon icon={faFileCircleCheck} className="icn " alt="search-icon" style={{ color: 'gray' }} />
            </div>
            <div className="navbar-item-text">
              Scanned
            </div>
          </div>
          <div className='navbar-item' onClick={handleSettings}>
            <div className="navbar-item-icon">
              <FontAwesomeIcon icon={faGear} className="icn " alt="search-icon" style={{ color: 'gray' }} />
            </div>
            <div className="navbar-item-text">
              Settings
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-profile">
        <div className="dp">
          <FontAwesomeIcon icon={faUser} className="dpicn" alt="user-profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;
