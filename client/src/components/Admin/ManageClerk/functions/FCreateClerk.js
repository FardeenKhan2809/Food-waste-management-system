import React, { useState } from 'react';
import Axios from 'axios';

const FCreateClerk = () => {
    const [cid, setcid] = useState('');
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

    const [errorMessage, setErrorMessage] = useState('');
   
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
            const response = await Axios.post('http://localhost:5000/api/createClerk', formData);
            if (response.data.success) {
           
            alert(response.data.message);
            setcid(response.data.cid);
            
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
            alert('Clerk failed. Please try again.');
          }
    };
    return { formData, handleChange, handleSubmit ,errorMessage,cid};
}
export default FCreateClerk;

