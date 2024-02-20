import React, { useState } from "react";
import "./Settings.css";
import Header from "../../Components/Header/Header";

const Settings = () => {
  const [global, setGlobal] = useState(true);

  return (
    <div className="settings">
      <Header />
      <div className="settings-container">
        <div className="settings-title">Settings</div>
        <div className="settings-buttons">
          <div className="settings-button-save" onClick={() => { }}>Save Changes</div>
          <div className="settings-button-import" onClick={() => { }}>Import API Keys</div>
          <div className="settings-button-export" onClick={() => { }}>Export API Keys</div>
          <div className="settings-button-reset" onClick={() => { }}>Reset to Factory Default</div>
        </div>
        <div className="settings-api-box">
          <div className="settings-storage">
            <div className="settings-button-item">AbstractAPI</div>
            <div className="settings-button-item">abuse.ch</div>
            <div className="settings-button-item">AbuseIPDB</div>
            <div className="settings-button-item">Abusix Mail Intelligence</div>
            <div className="settings-button-item">Account Finder</div>
            <div className="settings-button-item">AdBlock Check</div>
            <div className="settings-button-item">Ahmia</div>
            <div className="settings-button-item">AlienVault OTX</div>
            <div className="settings-button-item">AlienVault IP Reputation</div>
            <div className="settings-button-item">Archive.org</div>
          </div>
          <div className="settings-storage-content">hola</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
