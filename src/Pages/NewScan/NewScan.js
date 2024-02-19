import React from 'react'
import './NewScan.css';
import Header from '../../Components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCircleQuestion, faQuestion, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';


const NewScan = () => {



    return (
        <div className='newscan-container'>
            <Header />
            <div className='newscan-box'>
                <div className='newscan-title'>New Scan</div>
                <div className='newscan-inputs'>
                    <div className='newscan-input-name'>
                        <label className='newscan-input-label'>Scan Name</label>
                        <br />
                        <input className='newscan-input' name='scanName' type='text' placeholder='The name of the scan' />
                        <br />
                        <label className='newscan-input-label'>Scan Target</label>
                        <br />
                        <input className='newscan-input' name='scanName' type='text' placeholder='The name of the scan' />
                    </div>
                    <div className='newscan-format-box'>
                        <div className='newscan-format-desc'>
                            <FontAwesomeIcon icon={faQuestionCircle} style={{ height: '15px', marginRight: '15px' }} />
                            Your scan target may be one of the following We will automatically detect the target type based on the format of your input:
                        </div>
                        <div className='tables-container'>
                            <div className='table'>
                                <p><b>Domain Name:</b> e.g. example.com</p>
                                <p><b>IPv4 Address:</b> e.g. 1.2.3.4</p>
                                <p><b>IPv6 Address:</b> e.g. 2606:4700:4700:1111</p>
                                <p><b>Hostname/Sub-domain:</b> e.g. abc.example.com</p>
                                <p><b>Subnet:</b> e.g. 1.2.3.0/24</p>
                                <p><b>Bitcoin Address:</b> e.g. 1HesYJSP1QqcyPEjnQ9vzBL1wujruNGe7R</p>
                            </div>
                            <div className='table'>
                                <p><b>E-Mail address:</b> e.g. bob@example.com</p>
                                <p><b>Phone Number:</b> e.g. +12345678901 (E.164 format)</p>
                                <p><b>Human Name:</b> e.g. "John Smith" (must be in quotes)</p>
                                <p><b>Username:</b> e.g. "jsmith2000" (must be in quotes)</p>
                                <p><b>Network ASN:</b> e.g. 1234</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='newscan-configure-box'>
                    <div className='newscan-configure-navbar'>
                        <div className='newscan-configure-item'>By Use Case</div>
                        <div className='newscan-configure-item'>By Required Data</div>
                        <div className='newscan-configure-item'>By Modules</div>
                    </div>
                    <div className='newscan-configure-container'>
                        kedar
                    </div>
                </div>
            </div>

        </div>
    );
}
export default NewScan;