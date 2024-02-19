import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import Alerts from './Pages/Alerts/Alerts';
import NewScan from './Pages/NewScan/NewScan';
import Settings from './Pages/Settings/Settings'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/newscan' element={<NewScan />} />
          {/* <Route path='/scanned' element={<Scanned />} /> */}
          <Route path='/settings' element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/alerts' element={<Alerts />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
