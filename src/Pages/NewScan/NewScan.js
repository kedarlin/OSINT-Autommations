import React, { useState } from 'react'
import './NewScan.css';
import Header from '../../Components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewScan = () => {
    const [configureState, setConfigureState] = useState('req-data');
    const [selectedReqData, setSelectedReqData] = useState([]);
    const [selectedModules, setSelectedModules] = useState([]);
    const handleConfigureClick = (state) => {
        setConfigureState(state);
    };
    const [scanName, setScanName] = useState('');
    const [scanTarget, setScanTarget] = useState('');
    const navigate = useNavigate();


    // const useCases = [
    //     { id: 'newsArticles', label: 'News Articles' },
    //     { id: 'googleSearch', label: 'Google Search' },
    //     { id: 'googleDorks', label: 'Google Dorks' },
    //     { id: 'darkWebSearch', label: 'DarkWeb Search' },
    // ];
    const reqData = [
        { id: 'ipAddress', label: 'IP Address', desc: 'Unique IP address on the internet.' },
        { id: 'physicalAddress', label: 'Physical Address', desc: 'Location/Address identifying the last usage on the internet' },
        { id: 'teleCommunications', label: 'Telecommunications', desc: 'Information related to communication systems.' },
        { id: 'hostingProvider', label: 'Hosting Provider', desc: 'Details about the company hosting a website.' },
        { id: 'hackedEmailAddress', label: 'Hacked Email Address', desc: 'Email addresses compromised in security breaches.' },
        { id: 'accountsOnExternalSite', label: 'Accounts on External Site', desc: 'User accounts associated with external websites.' },
    ];

    const modules = [
        { id: 'darkWebSearch', label: 'DarkWeb Search', desc: 'Explore content available on the dark web.' },
        { id: 'socialMediaAnalyzer', label: 'Social Media Analyzer', desc: 'Analyze social media platforms for relevant information.' },
        { id: 'metaDataAnalyzer', label: 'Meta Data Analyzer', desc: 'Examine metadata for insights into digital content.' },
        { id: 'googleDorks', label: 'Google Dorking', desc: 'Perform advanced Google searches for security testing.' },
        { id: 'spiderFoot', label: 'SpiderFoot', desc: 'Conduct open-source intelligence (OSINT) on various sources.' },
        { id: 'newsGathering', label: 'News Gathering', desc: 'Collect recent news articles from various sources.' },
    ];
    const handleReqDataToggle = (reqDataId) => {
        setSelectedReqData((prevSelectedReqData) => {
            if (prevSelectedReqData.includes(reqDataId)) {
                return prevSelectedReqData.filter((id) => id !== reqDataId);
            } else {
                return [...prevSelectedReqData, reqDataId];
            }
        });
    };
    const handleModulesToggle = (modulesId) => {
        setSelectedModules((prevSelectedModules) => {
            if (prevSelectedModules.includes(modulesId)) {
                return prevSelectedModules.filter((id) => id !== modulesId);
            } else {
                return [...prevSelectedModules, modulesId];
            }
        });
    };
    const handleSelectAll = (dataIds) => {
        if (configureState === 'req-data') {
            setSelectedReqData(dataIds);
        } else if (configureState === 'modules') {
            setSelectedModules(dataIds);
        }
    };

    const handleDeselectAll = (dataIds) => {
        if (configureState === 'req-data') {
            setSelectedReqData([]);
        } else if (configureState === 'modules') {
            setSelectedModules([]);
        }
    };
    const handleScanClick = () => {
        console.log('Selected Configure State:', configureState);
        console.log('Selected Use Cases:', selectedReqData);
        console.log('Selected Configure State:', configureState);
        console.log('Selected Use Cases:', selectedModules);
        if (!scanName.trim()) {
            toast.error("please enter the name of scan");
            return;
        }
        if (!scanTarget.trim()) {
            toast.error("please enter scan target");
            return;
        }
        setConfigureState('req-data');
        setScanName('');
        setScanTarget('');
        setSelectedReqData('');
        setSelectedModules('')
        navigate('/scanned')
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
                        {/* <div
                            className={`newscan-configure-item ${configureState === 'use-case' ? 'active' : ''}`}
                            onClick={() => handleConfigureClick('use-case')}
                        >
                            By Use Case
                        </div> */}
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
                        {/* {configureState === 'use-case' && (
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
                        )} */}
                        {configureState === 'req-data' && (
                            <div className='use-case-configuration'>
                                <div className='config-header'>
                                    <h3>Select Required Data</h3>
                                    <div className='config-buttons-container'>
                                        <div className='config-button' onClick={() => handleSelectAll(reqData.map(item => item.id))}>Select All</div>
                                        <div className='config-button' onClick={() => handleDeselectAll(reqData.map(item => item.id))}>Deselect All</div>
                                    </div>
                                </div>
                                <div className='use-case-options'>
                                    {reqData.map((reqDataItem) => (
                                        <div style={{ display: "Flex", flexDirection: "row", marginBottom: "10px" }}>
                                            <div key={reqDataItem.id} className='scan-configure-option'
                                                id={reqDataItem.id}
                                                checked={selectedReqData.includes(reqDataItem.id)}
                                                onClick={() => handleReqDataToggle(reqDataItem.id)}
                                            >
                                                <input
                                                    type='checkbox'
                                                    id={reqDataItem.id}
                                                    checked={selectedReqData.includes(reqDataItem.id)}
                                                    onChange={() => handleReqDataToggle(reqDataItem.id)}
                                                />
                                                <label htmlFor={reqDataItem.id} className='scan-usecase-checkname'>
                                                    {reqDataItem.label}
                                                </label>
                                            </div>
                                            <div className='scan-desc-container'>
                                                <p className='scan-req-data-desc'>{reqDataItem.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {configureState === 'modules' && (
                            <div className='scan-modules-configuration'>
                                <div className='config-header'>
                                    <h3>Select Required Data</h3>
                                    <div className='config-buttons-container'>
                                        <div className='config-button' onClick={() => handleSelectAll(modules.map(item => item.id))}>Select All</div>
                                        <div className='config-button' onClick={() => handleDeselectAll(modules.map(item => item.id))}>Deselect All</div>
                                    </div>
                                </div>
                                <div className='modules-options'>
                                    {modules.map((modulesItem) => (
                                        <div style={{ display: "Flex", flexDirection: "row", marginBottom: "10px" }}>
                                            <div key={modulesItem.id} className='scan-configure-option'
                                                id={modulesItem.id}
                                                checked={selectedModules.includes(modulesItem.id)}
                                                onClick={() => handleModulesToggle(modulesItem.id)}
                                            >
                                                <input
                                                    type='checkbox'
                                                    id={modulesItem.id}
                                                    checked={selectedModules.includes(modulesItem.id)}
                                                    onChange={() => handleModulesToggle(modulesItem.id)}
                                                />
                                                <label htmlFor={modulesItem.id} className='scan-modules-checkname'>
                                                    {modulesItem.label}
                                                </label>
                                            </div>
                                            <div className='scan-desc-container'>
                                                <p className='scan-modules-desc'>{modulesItem.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}
export default NewScan;