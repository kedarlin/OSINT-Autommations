import React, { useState } from 'react';
import './Scanned.css';
import Header from '../../Components/Header/Header';


const Scanned = () => {

    return (
        <div className='scanned'>
            <Header />
            <div className='scanned-container'>
                <div className='scanned-title'>Scan</div>
                <div className='scanned-filter'>
                    <select name="filter">
                        <option value='None'> None </option>
                        <option value='running'> Running  </option>
                        <option value='finished'> Finished </option>
                        <option value> Aborted </option>
                    </select>
                </div>
                <table className='results'>
                    <tr>
                        <th>Name</th>
                        <th>Target</th>
                        <th>Started</th>
                        <th>Finished</th>
                        <th>Status</th>
                        <th>Elements</th>
                        <th>Correlations</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>Kedar</td>
                        <td>fniuhnefoka.com</td>
                        <td>2024-02-19 <br></br>
                            21:46:20
                        </td>
                        <td>2024-02-19 <br></br>
                            21:46:30
                        </td>
                        <td>Finished</td>
                        <td>2</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Hitheash</td>
                        <td>hnefoka.in</td>
                        <td>2024-03-29 <br></br>
                            23:42:49
                        </td>
                        <td>2024-03-29 <br></br>
                            23:42:59
                        </td>
                        <td>Aborted</td>
                        <td>209</td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Scanned;