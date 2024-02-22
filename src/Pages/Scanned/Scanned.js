import React, { useEffect, useState } from 'react';
import { app } from '../../index';
import { getFirestore, collection, query, getDocs, where } from 'firebase/firestore';
import './Scanned.css';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const Scanned = () => {
    const [scans, setScans] = useState([]);
    const [filter, setFilter] = useState('None');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore(app);
                let q;

                if (filter !== 'None') {
                    q = query(collection(db, 'scans'), where("status", "==", filter));
                } else {
                    q = collection(db, 'scans');
                }

                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setScans(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [filter]);

    const handleFilterChange = (e) => {
        const selectedFilter = e.target.value;
        setFilter(selectedFilter);
    };

    return (
        <div className='scanned'>
            <Header />
            <Sidebar />
            <div className='scanned-container'>
                <div className='scanned-title'>Scan</div>
                <div className='filter-container'>
                    <div className='scanned-filter'>
                        <FontAwesomeIcon icon={faFilter} style={{ marginRight: '5px' }} />
                        <label>Filter : </label>
                        <select
                            name="filter"
                            className='filter-options'
                            value={filter}
                            onChange={handleFilterChange}
                        >
                            <option value='None'> None </option>
                            <option value='running'> Running </option>
                            <option value='finished'> Finished </option>
                            <option value='aborted'> Aborted </option>
                        </select>
                    </div>
                    <div className='scanned-other-oper'>
                        kedar
                        {/* <add buttons for rescan and others> */}
                    </div>
                </div>

                <table className='results'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Target</th>
                            <th>Started</th>
                            <th>Finished</th>
                            <th>Status</th>
                            <th>Elements</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scans.map(scan => (
                            <tr key={scan.id}>
                                <td>{scan.name}</td>
                                <td>{scan.target}</td>
                                <td>{scan.started?.toDate().toLocaleString()}</td>
                                <td>{scan.finished?.toDate().toLocaleString()}</td>
                                <td>{scan.status}</td>
                                <td>{scan.elements}</td>
                                <td>{/* Add action button or link here */}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Scanned;
