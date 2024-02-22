import React, { useState } from 'react'
import './NewScan.css';
import Header from '../../Components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewScan = () => {
    const [configureState, setConfigureState] = useState('use-case');
    const [selectedUseCases, setSelectedUseCases] = useState([]);
    const handleConfigureClick = (state) => {
        setConfigureState(state);
    };
    const [scanName, setScanName] = useState('');
    const [scanTarget, setScanTarget] = useState('');
    const navigate = useNavigate();


    const useCases = [
        { id: 'newsArticles', label: 'News Articles' },
        { id: 'googleSearch', label: 'Google Search' },
        { id: 'googleDorks', label: 'Google Dorks' },
        { id: 'darkWebSearch', label: 'DarkWeb Search' },
    ];
    const reqData = [
        { id: 'newsArticles', label: 'News Articles' },
        { id: 'googleSearch', label: 'Google Search' },
        { id: 'googleDorks', label: 'Google Dorks' },
        { id: 'darkWebSearch', label: 'DarkWeb Search' },
    ];
    const modules = [
        { id: 'newsArticles', label: 'News Articles' },
        { id: 'googleSearch', label: 'Google Search' },
        { id: 'googleDorks', label: 'Google Dorks' },
        { id: 'darkWebSearch', label: 'DarkWeb Search' },
    ];
    const handleUseCaseToggle = (useCaseId) => {
        setSelectedUseCases((prevSelectedUseCases) => {
            if (prevSelectedUseCases.includes(useCaseId)) {
                return prevSelectedUseCases.filter((id) => id !== useCaseId);
            } else {
                return [...prevSelectedUseCases, useCaseId];
            }
        });
    };
    const handleScanClick = () => {
        console.log('Selected Configure State:', configureState);
        console.log('Selected Use Cases:', selectedUseCases);
        if (!scanName.trim()) {
            toast.error("please enter the name of scan");
            return;
        }
        if (!scanTarget.trim()) {
            toast.error("please enter scan target");
            return;
        }
    }
    return (
        <div className='newscan-container'>
            <ToastContainer />
            <Header />
            <div className='newscan-box'>
                <div className='newscan-title'>New Scan</div>
                <div className='newscan-inputs'>
                    <div className='newscan-input-name'>
                        <label className='newscan-input-label'>Scan Name</label>
                        <br />
                        <input
                            className='newscan-input'
                            name='scanName'
                            type='text'
                            placeholder='The name of the scan'
                            value={scanName}
                            onChange={(e) => setScanName(e.target.value)} />
                        <br />
                        <label className='newscan-input-label'>Scan Target</label>
                        <br />
                        <input
                            className='newscan-input'
                            name='scanName'
                            type='text'
                            placeholder='The name of the scan'
                            value={scanTarget}
                            onChange={(e) => setScanTarget(e.target.value)} />

                        <div className='newscan-scan-button' onClick={handleScanClick}>Start Scan</div>
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
                        <div
                            className={`newscan-configure-item ${configureState === 'use-case' ? 'active' : ''}`}
                            onClick={() => handleConfigureClick('use-case')}
                        >
                            By Use Case
                        </div>
                        <div
                            className={`newscan-configure-item ${configureState === 'req-data' ? 'active' : ''}`}
                            onClick={() => handleConfigureClick('req-data')}
                        >
                            By Required Data
                        </div>
                        <div
                            className={`newscan-configure-item ${configureState === 'modules' ? 'active' : ''}`}
                            onClick={() => handleConfigureClick('modules')}
                        >
                            By Modules
                        </div>
                    </div>
                    <div className='newscan-configure-container'>
                        {configureState === 'use-case' && (
                            <div className='use-case-configuration'>
                                <h3>Select Use Cases:</h3>
                                <div className='use-case-options'>
                                    {useCases.map((useCase) => (
                                        <div key={useCase.id} className='use-case-option'>
                                            <input
                                                type='checkbox'
                                                id={useCase.id}
                                                checked={selectedUseCases.includes(useCase.id)}
                                                onChange={() => handleUseCaseToggle(useCase.id)}
                                            />
                                            <label htmlFor={useCase.id} className='scan-usecase-checkname'>{useCase.label}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {configureState === 'req-data' && (
                            // Render content for 'By Required Data'
                            <div>Content for By Required Data</div>
                        )}
                        {configureState === 'modules' && (
                            // Render content for 'By Modules'
                            <div>Content for By Modules</div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}
export default NewScan;