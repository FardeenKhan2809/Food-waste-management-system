import React, { useState } from 'react';
import Axios from 'axios';
import {Alert} from '@material-tailwind/react';

const CreateAdmin = () => {
    const [aid, setaid] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        dateOfBirth: '',
        email: '',
        mobileNo: '',
        username: '',
        password: '',
        securityQuestion: '',
        answer: '',
    });

   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

       
        try {
            const response = await Axios.post('http://localhost:5000/api/createadmin', formData);
            if (response.data.success) {
           
            alert(response.data.message);
            setaid(response.data.aid);

                setFormData({
                    category: '',
                    organisationName: '',
                    name: '',
                    address: '',
                    dateOfBirth: '',
                    email: '',
                    mobileNo: '',
                    username: '',
                    password: '',
                    securityQuestion: '',
                    answer: '',
                });
            
                window.location.href = '/viewadmin';
            } else {
                if (response.data.focus) {
                    const field = document.getElementById(response.data.focus);
                    if (field) {
                        field.focus();
                    }
                }
                
                window.alert(response.data.message);
            }  
          } catch (error) {
            console.error('Error submitting form:', error);
            alert('Registration failed. Please try again.');
          }
    };
    return { formData, handleChange, handleSubmit ,aid};
}
export default CreateAdmin;

