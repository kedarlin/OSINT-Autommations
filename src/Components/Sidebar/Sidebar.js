import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilter, faBell } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  // Function to check if a given path is part of the current active page
  const isPartOfActivePage = (path) => activePage.startsWith(path);

  const handleNavigation = (path) => {
    setActivePage(path);
    navigate(path);
  };

  return (
    <nav className="nav">
      <div className="nav-upper-options">
        <div className={`nav-option option3 ${isPartOfActivePage('/scanned') && 'active'}`} onClick={() => handleNavigation('/scanned')}>
          <FontAwesomeIcon icon={faFilter} className="nav-img" alt="filter" />
          <h3> Filter Scans</h3>
        </div>
        <div className={`nav-option option1 ${isPartOfActivePage('/dashboard') && 'active'}`} onClick={() => handleNavigation('/scanned')}>
          <FontAwesomeIcon icon={faHome} className="nav-img" alt="dashboard" />
          <h3> Dashboard</h3>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
