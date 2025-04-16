import { useState } from 'react';
import axios from 'axios';

const FUpdateclerk = (clerk, navigate) => {
  const [formData, setFormData] = useState({
    cid:clerk.cid,
    name: clerk.name,
    email: clerk.email,
    mobileNo: clerk.mobileNo,
    address: clerk.address,
    dateOfBirth: clerk.dateOfBirth,
    username: clerk.username,
    password: clerk.password,
    securityQuestion: clerk.securityQuestion,
    answer: clerk.answer
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
      await axios.put(`http://localhost:5000/api/clerks/${clerk._id}`, formData);
      window.history.back();
    } catch (error) {
      console.error('Error updating clerk:', error);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default FUpdateclerk;
