import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button, Alert,Typography } from '@material-tailwind/react';
import Lottie from 'lottie-react';
import animationData from '../../../assets/Videos/forgotpsw.json';
import { CommonNavbar } from '../commonNavbar';
import Footer from '../../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '', 
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            window.alert('Please fill in all details.');
            return;
        }
        try {
            const response = await axios.put('http://localhost:5000/api/registrations', formData);
            if (response.status === 200) {
                console.log('Password reset successful');
                setErrorMessage('');
                setFormData({
                    username: '',
                    email: '',
                    password: '', 
                });
                window.alert('Password reset successful');
                navigate('/login');
            }
        } catch (error) {
            console.error('Error resetting password:', error.message);
            window.alert('User not found.');
            setSuccessMessage('');
        }
    };

    return (
        <>
            <CommonNavbar />
            <div className="container mx-auto mt-8 mr-4 ml-4">
                <div className="flex flex-col md:flex-row border border-gray-300 rounded-md">
                    <div className="md:w-1/2 p-4 border-r border-gray-300" style={{ backgroundColor: '#add8e6', paddingTop: '20px' }}>
                        <Lottie animationData={animationData} style={{ marginTop: '70px' }} />
                    </div>
                    <div className="md:w-1/2 p-4 mt-12">
                        <h1 className="text-3xl font-semibold mb-4">Forgot Password</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block mb-1">Enter Username:</label>
                                <Input variant='standard' type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-1">Enter Email:</label>
                                <Input variant='standard' type="text" id="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block mb-1">New Password:</label>
                                <Input variant='standard' type="password" id="password" name="password" value={formData.password} onChange={handleChange} required/>
                                <Typography
        variant="small"
        color="gray"
        className="mt-2 flex items-center gap-1 font-normal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="-mt-px h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
        Use at least 8 characters, one uppercase, one lowercase and one number.
      </Typography>
                            </div>
                            <Button type="submit" color="green" size="lg">Reset Password</Button>
                        </form>
                        <br />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ForgotPassword;
