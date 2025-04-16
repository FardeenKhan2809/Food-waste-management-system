import { useState } from 'react';
import axios from 'axios';

const useUpdateFoodWasteSlurry = () => {
  const [formData, setFormData] = useState({
    type: '',
    quantity: 0,
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('Updated field:', name, value); // Log updated field and value
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/foodwasteslurries/${id}`, formData);
      window.alert('Record updated successfully');
    } catch (error) {
      console.error('Error updating food waste slurry:', error);
      window.alert('Failed to update record');
    }
  };

  const fetchFoodWasteSlurry = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/foodwasteslurries/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching food waste slurry:', error);
      window.alert('Failed to fetch food waste slurry');
    }
  };

  return { formData, handleChange, handleSubmit, fetchFoodWasteSlurry };
};

export default useUpdateFoodWasteSlurry;
