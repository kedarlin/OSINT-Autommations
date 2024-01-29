import './Alerts.css';
import React from 'react';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Alerts = () => {
    return (
        <div className='alert-container'>
            <Header />
            <Sidebar />
            <div className='content'>
                <h2>Alerts</h2>
                <div className='alert-titles'>
                    <div className='alert-col-title'>No</div>
                    <div className='alert-col-title'>Alert Name</div>
                    <div className='alert-col-title'>Alert Type</div>
                    <div className='alert-col-title'>Time</div>
                    <div className='alert-col-title'>Location</div>
                    <div className='alert-col-title'>Actions</div>
                </div>

                {/* Sample IDS alerts */}
                <div className='alert-row type-ids'>
                    <div className='alert-col'>1</div>
                    <div className='alert-col'>Suspicious Activity</div>
                    <div className='alert-col'>IDS</div>
                    <div className='alert-col'>2024-01-29 10:30 AM</div>
                    <div className='alert-col'>192.168.1.100</div>
                    <div className='alert-col'>
                        <a href="/logs/1" target="_blank" rel="noopener noreferrer">
                            View Logs
                        </a>
                    </div>
                </div>

                <div className='alert-row type-malware'>
                    <div className='alert-col'>2</div>
                    <div className='alert-col'>Malware Detected</div>
                    <div className='alert-col'>Malware</div>
                    <div className='alert-col'>2024-01-29 02:45 PM</div>
                    <div className='alert-col'>10.0.0.25</div>
                    <div className='alert-col'>
                        <a href="/logs/2" target="_blank" rel="noopener noreferrer">
                            View Logs
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alerts;
