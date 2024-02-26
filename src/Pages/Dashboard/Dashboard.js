import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import './Dashboard.css';

function SocialMediaDataDisplay({ socialMediaData }) {
  // Check if socialMediaData is an array before mapping over it
  console.log(socialMediaData);
  if (!Array.isArray(socialMediaData)) {
    return <p className='content-dashboard'>No social media data available.</p>;
  }

  return (
    <table className='social-media-data-dashboard'>
      <thead>
        <tr>
          <th className='title-dashboard'>Site</th>
          <th className='title-dashboard'>URL</th>
        </tr>
      </thead>
      <tbody>
        {socialMediaData.map((item, index) => (
          <tr key={index}>
            <td className='title-dashboard'><b>{item.site}</b></td>
            <td className='title-dashboard'><i>{item.url}</i></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Dashboard() {
  const [socialMediaData, setSocialMediaData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const id = useParams();
  const userid = id.userid;

  const handleButtonClick = () => {
    setIsLoading(true);

    // Replace this link with your actual API endpoint
    const apiUrl = `http://localhost:3020/user/${userid}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const extractedData = data[0]?.data || '{}';
        const jsonData = JSON.parse(extractedData);

        // Extract socialMediaAnalyzer data
        const socialMediaAnalyzerData = JSON.parse(jsonData.socialMediaAnalyzer || '[]');

        setSocialMediaData(socialMediaAnalyzerData);
      })
      .catch(error => {
        console.error('Error fetching social media data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className='dashboard-container'>
        <div className='social-media-dashboard'>
          <h2 className='title-dashboard'><b>Social Media Search</b></h2>
          <p className='content-dashboard' onClick={handleButtonClick}>Analyze social media platforms for relevant information.</p>
          {isLoading ? (
            <p className='content-dashboard'>Loading social media data...</p>
          ) : (
            <SocialMediaDataDisplay socialMediaData={socialMediaData} />
          )}
        </div>
        {/* ... existing code ... */}
      </div>
    </div>
  );
}

export default Dashboard;