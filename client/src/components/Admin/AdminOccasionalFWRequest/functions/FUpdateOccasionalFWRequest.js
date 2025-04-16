import { useState } from 'react';
import axios from 'axios';

const FUpdateOccasionalFWRequest = (OccasionalFWRequest, navigate) => {
  const [formData, setFormData] = useState({
    requestId: OccasionalFWRequest.requestId || '',
    description: OccasionalFWRequest.description || '',
    date: OccasionalFWRequest.date || '',
    address: OccasionalFWRequest.address || '',
    email: OccasionalFWRequest.email || '',
    mobileNo: OccasionalFWRequest.mobileNo || '',
    requesterName: OccasionalFWRequest.requesterName || '',
    approxQuantity: OccasionalFWRequest.approxQuantity || '',
    
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
      await axios.put(`http://localhost:5000/api/Occasional/${OccasionalFWRequest._id}`, formData);
      window.history.back();
    } catch (error) {
      console.error('Error updating OccasionalFWRequest:', error);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default FUpdateOccasionalFWRequest;
