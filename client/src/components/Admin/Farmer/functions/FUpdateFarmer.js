import { useState } from 'react';
import axios from 'axios';

const FUpdateFarmer = (farmer, navigate) => {
  const [formData, setFormData] = useState({
    farmerId: farmer.farmerId || '',
    farmerName: farmer.farmerName || '',
    farmerMobileNo: farmer.farmerMobileNo || '',
    farmerEmail: farmer.farmerEmail || '',
    farmerAddress: farmer.farmerAddress || '',
    farmerUsername: farmer.farmerUsername || '',
    farmerPassword: farmer.farmerPassword || '',
    farmerSecurityQuestion: farmer.farmerSecurityQuestion || '',
    farmerAnswer: farmer.farmerAnswer || '',
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
      await axios.put(`http://localhost:5000/api/Farmers/${farmer._id}`, formData);
      window.history.back();
    } catch (error) {
      console.error('Error updating farmer:', error);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default FUpdateFarmer;
