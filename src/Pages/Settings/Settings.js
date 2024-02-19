import React, { useState } from "react";
import "./Settings.css";
import Header from "../../Components/Header/Header";

const Settings = () => {
  const [global, setGlobal] = useState(true);

  return (
    <div className="settings">
        <Header />
      <h1 className="settings-title">Settings</h1>
      <div className="settings-buttons">
        <button className="settings-button">Save Changes</button>
        <button className="settings-button">Import API Keys</button>
        <button className="settings-button">Export API Keys</button>
        <button id="only" className="settings-button">Reset to Factory Default</button>
      </div>
      <div className="settings-storage">
        <div className="settings-button-item"><a href="#" className="settings-button">AbstractAPI</a></div>
        <div className="settings-button-item"><a href="#" className="settings-button">abuse.ch</a></div>
        <div className="settings-button-item"><a href="#" className="settings-button">AbuseIPDB</a></div>
        <div className="settings-button-item"><a href="#" className="settings-button">Abusix Mail Intelligence</a></div>
        <div className="settings-button-item"><a href="#" className="settings-button">Account Finder</a></div>
        <div className="settings-button-item"><a href="#" className="settings-button">AdBlock Check</a></div>
        <div className="settings-button-item"><a href="#" className="settings-button">Ahmia</a></div>
        <div className="settings-button-item"><a href="#" className="settings-button">AlienVault OTX</a></div>
        <div className="settings-button-item"><a href="#" className="settings-button">AlienVault IP Reputation</a></div>
        <div className="settings-button-item"><a href="#" className="settings-button">Archive.org</a></div>
      </div>
    </div>
  );
};

export default Settings;
