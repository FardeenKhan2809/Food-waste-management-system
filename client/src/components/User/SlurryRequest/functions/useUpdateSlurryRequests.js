import { useState } from 'react';
import axios from 'axios';

const useUpdateSlurryRequests = () => {
  const [formData, setFormData] = useState({
    farmerName: '',
    phoneNumber: '',
    address: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/slurryRequests/${id}`, formData);
    } catch (error) {
      console.error('Error updating slurry request:', error);
    }
  };

  const fetchSlurryRequest = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/slurryRequests/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching slurry request:', error);
    }
  };

  return { formData, handleChange, handleSubmit, fetchSlurryRequest };
};

export default useUpdateSlurryRequests;
