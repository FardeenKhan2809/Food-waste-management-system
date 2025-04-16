import { useState } from 'react';
import axios from 'axios';

const FUpdateSource = (source, navigate) => {
  const [formData, setFormData] = useState({
    name: source.name,
    email: source.email,
    mobileNo: source.mobileNo,
    address: source.address,
    contactPerson: source.contactPerson,
    
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
      await axios.put(`http://localhost:5000/api/sources/${source._id}`, formData);
      navigate('/admin');
    } catch (error) {
      console.error('Error updating Source:', error);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default FUpdateSource;
