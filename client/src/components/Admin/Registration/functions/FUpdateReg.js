import { useState } from 'react';
import axios from 'axios';

const FUpdateReg = (registration, navigate) => {
  const [formData, setFormData] = useState({
    regid:registration.regid,
    category: registration.category,
    organisationName: registration.organisationName,
    name: registration.name,
    email: registration.email,
    mobileNo: registration.mobileNo,
    address: registration.address,
    dateOfBirth: registration.dateOfBirth,
    username: registration.username,
    password: registration.password,
    securityQuestion: registration.securityQuestion,
    answer: registration.answer
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
      await axios.put(`http://localhost:5000/api/registrations/${registration._id}`, formData);
      window.history.back();
    } catch (error) {
      console.error('Error updating registration:', error);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default FUpdateReg;
