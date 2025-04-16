import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Input, Button, Typography } from '@material-tailwind/react';
import Footer from '../Footer/Footer';

const FarmerRequest = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(currentDate);

    // State management
    const [formData, setFormData] = useState({
        farmerName: '',
        mobileNo: '',
        address: '',
        date: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    // Fetch user data and pre-fill form data
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await Axios.get('http://localhost:5000/api/user',{withCredentials:true});
                const userDetails = response.data;

                // Check if the user is in the Farmer category
                if (userDetails.category === 'Farmer') {
                    setFormData({
                        farmerName: userDetails.name || '',
                        mobileNo: userDetails.mobileNo || '',
                        address: userDetails.address || '',
                        date: '' // Leave date blank for now
                    });
                } else {
                    setError('User category not suitable for this request');
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError('Failed to fetch user data');
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleChangeDate = (e) => {
        setSelectedDate(e.target.value);
    };


    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccessMessage(null);

        try {
            const response = await Axios.post('http://localhost:5000/api/slurryRequest', formData);
            setSuccessMessage(response.data.message);
            // Reset form data
           
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('Error submitting form. Please try again.');
        }
        setLoading(false);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    return (
        <>
            <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
                <Typography variant="h3" className="text-center mb-4">Farmer Request Form</Typography>
                <form onSubmit={handleSubmit} className="mt-4">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <Typography className="form-label font-bold">Farmer Name:</Typography>
                                </td>
                                <td>
                                    <Input
                                        variant='standard'
                                        type="text"
                                        name="farmerName"
                                        value={formData.farmerName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Farmer Name"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography className="form-label font-bold">Phone Number:</Typography>
                                </td>
                                <td>
                                    <Input
                                        variant='standard'
                                        type="tel"
                                        name="mobileNo"
                                        value={formData.mobileNo}
                                        onChange={handleInputChange}
                                        placeholder="Enter Phone Number"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography className="form-label font-bold">Address:</Typography>
                                </td>
                                <td>
                                    <Input
                                        variant='standard'
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Enter Address"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography className="form-label font-bold">Date:</Typography>
                                </td>
                                <td>
                                    <Input
                                        variant='standard'
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        placeholder="Select Date"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-4">
                        <Button type="submit" color="blue">Submit</Button>
                        <Button color="green" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
                    </div>
                </form>
                <br />
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </div>
            <Footer />
        </>
    );
};

export default FarmerRequest;
