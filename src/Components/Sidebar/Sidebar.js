import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilter, faBell } from '@fortawesome/free-solid-svg-icons';
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
        <div className={`nav-option option3 ${isPageActive('/filter-logs') && 'active'}`} onClick={() => handleNavigation('/filter-logs')}>
          <FontAwesomeIcon icon={faFilter} className="nav-img" alt="filter" />
          <h3> Filter Logs</h3>
        </div>
        <div className={`nav-option option1 ${isPageActive('/dashboard') && 'active'}`} onClick={() => handleNavigation('/dashboard')}>
          <FontAwesomeIcon icon={faHome} className="nav-img" alt="dashboard" />
          <h3> Dashboard</h3>
        </div>

        <div className={`nav-option option4 ${isPageActive('/alerts') && 'active'}`} onClick={() => handleNavigation('/alerts')}>
          <FontAwesomeIcon icon={faBell} className="nav-img" alt="alerts" />
          <h3> Alerts</h3>
        </div>

      </div>
    </nav>
  );
}

export default Sidebar;
