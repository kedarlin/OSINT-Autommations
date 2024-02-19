import React from 'react'
import './NewScan.css';
import Header from '../../Components/Header/Header';


const NewScan = () => {



    return(
        <div className='newscan-container'>
            <Header />
            <div className='newscan-inputs'>
                <h2 className='newscan-title'>New Scan</h2>
            </div>
        </div>
    )
}
export default NewScan;