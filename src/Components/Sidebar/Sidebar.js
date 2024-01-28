import React from 'react';
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faExclamationTriangle, faFilter, faBell, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
function Sidebar() {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <div className="nav-upper-options"> 
        <div className="nav-option option1" onClick={() => navigate('/dashboard')}> 
          <FontAwesomeIcon icon={faHome} className="nav-img" alt="dashboard" /> 
          <h3> Dashboard</h3> 
        </div> 

        <div className="option2 nav-option"> 
          <FontAwesomeIcon icon={faExclamationTriangle} className="nav-img" alt="threats" /> 
          <h3> Threats</h3> 
        </div> 

        <div className="nav-option option3"> 
          <FontAwesomeIcon icon={faFilter} className="nav-img" alt="filter" /> 
          <h3> Filter Logs</h3> 
        </div> 

        <div className="nav-option option4"  onClick={() => navigate('/alerts')}> 
          <FontAwesomeIcon icon={faBell} className="nav-img" alt="alerts" /> 
          <h3> Alerts</h3> 
        </div> 

        <div className="nav-option option5"> 
          <FontAwesomeIcon icon={faUser} className="nav-img" alt="blog" /> 
          <h3> Profile</h3> 
        </div> 

        <div className="nav-option option6"> 
          <FontAwesomeIcon icon={faCog} className="nav-img" alt="settings" /> 
          <h3> Settings</h3> 
        </div> 

        <div className="nav-option logout"> 
          <FontAwesomeIcon icon={faSignOutAlt} className="nav-img" alt="logout" /> 
          <h3> Logout</h3> 
        </div> 
      </div> 
    </nav>
  );
}

export default Sidebar;
