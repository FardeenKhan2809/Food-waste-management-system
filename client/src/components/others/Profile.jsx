import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBuilding, faUser, faMapMarkerAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import profileimg from "../common/Images/profile.png";
import { OthersSidebar } from './Sidebar';

function Profile()  {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUserData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/user', { withCredentials: true });
            setUserData(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error.response.data.error);
            setError(error.response.data.error);
            setLoading(false);
        }
    };
    fetchUserData();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {userData && (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-400">
          <div className="w-2/3 h-3/4 bg-white flex justify-between items-center px-8 py-4 rounded-lg shadow-xl">
            <div className="w-1/2 flex justify-center">
              {/* User image */}
              <img src={profileimg} alt="User" className="w-full h-auto" />
            </div>
            <div className="w-1/2 flex flex-col justify-center pl-16">
              
              {/* User data */}
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faUser} className="text-2xl text-blue-gray-500 mr-4" />
                <span className="text-lg">{userData.name}</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faBuilding} className="text-2xl text-blue-gray-500 mr-4" />
                <span className="text-lg">{userData.organisationName}</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-blue-gray-500 mr-4" />
                <span className="text-lg">{userData.address}</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faPhone} className="text-2xl text-blue-gray-500 mr-4" />
                <span className="text-lg">{userData.mobileNo}</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-blue-gray-500 mr-4" />
                <span className="text-lg">{userData.email}</span>
              </div>
              <Button color="light-blue" size="lg" className='mb-2 me-2' onClick={() => window.history.back()}>Back</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
