import { useState } from 'react';
import axios from 'axios';

const FUpdateadmin = (admin, navigate) => {
  const [formData, setFormData] = useState({
    aid:admin.aid,
    name: admin.name,
    email: admin.email,
    mobileNo: admin.mobileNo,
    address: admin.address,
    dateOfBirth: admin.dateOfBirth,
    username: admin.username,
    password: admin.password,
    securityQuestion: admin.securityQuestion,
    answer: admin.answer
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/admins/${admin._id}`, formData);
      
      window.history.back();
    } catch (error) {
      console.error('Error updating admin:', error);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default FUpdateadmin;
