import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Scanned.css';
import Header from '../../Components/Header/Header';
import { Icons } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';


const Scanned = () => {

    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/');
                setJsonData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='scanned'>
            <Header />
            <div className='scanned-container'>
                <div className='scanned-title'>Scan</div>
                <div className='filter-container'>
                    <div className='scanned-filter'>
                        <FontAwesomeIcon icon={faFilter} style={{marginRight : '5px'}} />
                        <label>Filter : </label>
                        <select name="filter" className='filter-options'>
                            <option value='None'> None </option>
                            <option value='running'> Running  </option>
                            <option value='finished'> Finished </option>
                            <option value='aborted'> Aborted </option>
                        </select>
                    </div>
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
                <div>
                    {/* Display your JSON data in a pre tag for proper indentation */}
                    <pre>{JSON.stringify(jsonData, null, 2)}</pre>
                </div>
            </div>
        </div>
    )
}
export default Scanned;