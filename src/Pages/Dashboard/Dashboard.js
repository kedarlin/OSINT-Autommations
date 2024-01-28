import React from 'react';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faServer, faShieldAlt, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../../index.css';


function Dashboard() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div className="main">

          <div className="box-container">
            <div className="box box1">
              <div className="text">
                <h2 className="topic-heading">60.5k</h2>
                <h2 className="topic">No Of Logs</h2>
              </div>

              <FontAwesomeIcon icon={faClipboard} className="icon" alt="No Of Logs" />
            </div>

            <div className="box box2">
              <div className="text">
                <h2 className="topic-heading">150</h2>
                <h2 className="topic">Systems Online</h2>
              </div>

              <FontAwesomeIcon icon={faServer} className="icon" alt="Systems Online" />
            </div>

            <div className="box box3">
              <div className="text">
                <h2 className="topic-heading">320</h2>
                <h2 className="topic">Systems Offline</h2>
              </div>

              <FontAwesomeIcon icon={faServer} className="icon" alt="Systems Offline" />
            </div>

            <div className="box box4">
              <div className="text">
                <h2 className="topic-heading">70</h2>
                <h2 className="topic">Systems Down</h2>
              </div>

              <FontAwesomeIcon icon={faServer} className="icon" alt="Systems Down" />
            </div>
            <div className="box box5">
              <div className="text">
                <h2 className="topic-heading">9</h2>
                <h2 className="topic">Threat Detections</h2>
              </div>

              <FontAwesomeIcon icon={faShieldAlt} className="icon" alt="Threat Detections" />
            </div>
            <div className="box box5">
              <div className="text">
                <h2 className="topic-heading">142</h2>
                <h2 className="topic">No Of Desktops</h2>
              </div>

              <FontAwesomeIcon icon={faDesktop} className="icon" alt="No Of Desktops" />
            </div>
            <div className="box box6">
              <div className="text">
                <h2 className="topic-heading">9</h2>
                <h2 className="topic">Contained Systems</h2>
              </div>

              <FontAwesomeIcon icon={faDesktop} className="icon" alt="No Of Desktops" />
            </div>
          </div>

          <div className="report-container">
            <div className="report-header">
              <h1 className="recent-Articles">Service Devices</h1>
              <button className="view">View All</button>
            </div>

            <div className="report-body">
              <div className="report-topic-heading">
                <h3 className="t-op">Device Names</h3>
                <h3 className="t-op">Threats</h3>
                <h3 className="t-op">Run Time</h3>
                <h3 className="t-op">Status</h3>
              </div>

              <div className="items">
                <div className="item1">
                  <h3 className="t-op-nextlvl">Article 73</h3>
                  <h3 className="t-op-nextlvl">2.9k</h3>
                  <h3 className="t-op-nextlvl">210</h3>
                  <h3 className="t-op-nextlvl label-tag">Published</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
