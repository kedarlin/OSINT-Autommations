import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faExclamationTriangle, faFilter, faBell, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  const handleNavigation = (path) => {
    setActivePage(path);
    navigate(path);
  };

  const isPageActive = (path) => path === activePage;

  return (
    <nav className="nav">
      <div className="nav-upper-options">
        <div className={`nav-option option1 ${isPageActive('/dashboard') && 'active'}`} onClick={() => handleNavigation('/dashboard')}>
          <FontAwesomeIcon icon={faHome} className="nav-img" alt="dashboard" />
          <h3> Dashboard</h3>
        </div>

        <div className={`nav-option option2 ${isPageActive('/threats') && 'active'}`} onClick={() => handleNavigation('/threats')}>
          <FontAwesomeIcon icon={faExclamationTriangle} className="nav-img" alt="threats" />
          <h3> Threats</h3>
        </div>

        <div className={`nav-option option3 ${isPageActive('/filter-logs') && 'active'}`} onClick={() => handleNavigation('/filter-logs')}>
          <FontAwesomeIcon icon={faFilter} className="nav-img" alt="filter" />
          <h3> Filter Logs</h3>
        </div>

        <div className={`nav-option option4 ${isPageActive('/alerts') && 'active'}`} onClick={() => handleNavigation('/alerts')}>
          <FontAwesomeIcon icon={faBell} className="nav-img" alt="alerts" />
          <h3> Alerts</h3>
        </div>

        <div className={`nav-option option5 ${isPageActive('/profile') && 'active'}`}>
          <FontAwesomeIcon icon={faUser} className="nav-img" alt="blog" />
          <h3> Profile</h3>
        </div>

        <div className={`nav-option option6 ${isPageActive('/settings') && 'active'}`}>
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
