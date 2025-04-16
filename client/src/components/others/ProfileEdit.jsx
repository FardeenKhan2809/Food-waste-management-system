import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBuilding, faUser, faMapMarkerAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import profileimg from "../common/Images/profile.png";
import { OthersSidebar } from './Sidebar';

function EditProfile() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [updatedData, setUpdatedData] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user', { withCredentials: true });
                setUserData(response.data);
                setUpdatedData(response.data); // Initialize updated data with user data
                setLoading(false);
            } catch (error) {
                console.error(error.response.data.error);
                setError(error.response.data.error);
                setLoading(false);
            }
        };
        fetchUserData();
    }, []);

    // Handle form field changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdatedData({ ...updatedData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put('http://localhost:5000/api/users', updatedData, { withCredentials: true });
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Failed to update profile:', error);
            alert('Failed to update profile. Please try again later.');
        }
    };

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
                            <form onSubmit={handleSubmit}>
                                {/* User data inputs */}
                                <div className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faUser} className="text-2xl text-blue-gray-500 mr-4" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={updatedData.name}
                                        onChange={handleInputChange}
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </div>
                                <div className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faBuilding} className="text-2xl text-blue-gray-500 mr-4" />
                                    <input
                                        type="text"
                                        name="organisationName"
                                        value={updatedData.organisationName}
                                        onChange={handleInputChange}
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </div>
                                <div className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-blue-gray-500 mr-4" />
                                    <input
                                        type="text"
                                        name="address"
                                        value={updatedData.address}
                                        onChange={handleInputChange}
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </div>
                                <div className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faPhone} className="text-2xl text-blue-gray-500 mr-4" />
                                    <input
                                        type="text"
                                        name="mobileNo"
                                        value={updatedData.mobileNo}
                                        onChange={handleInputChange}
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </div>
                                <div className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-blue-gray-500 mr-4" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={updatedData.email}
                                        onChange={handleInputChange}
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </div>
                                
                                {/* Submit button */}
                                <Button color="green" size="lg" className='mb-2 mr-2' type="submit">
                                    Submit
                                </Button>
                                <Button color="light-blue" size="lg" className='mb-2 me-2' onClick={() => window.history.back()}>
                                    Back
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default EditProfile;
