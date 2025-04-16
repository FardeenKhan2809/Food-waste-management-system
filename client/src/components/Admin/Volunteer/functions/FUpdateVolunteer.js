import { useState } from 'react';
import axios from 'axios';

const FUpdateVolunteer = (volunteer, navigate) => {
  const [formData, setFormData] = useState({
    volunteerId:volunteer.volunteerId || '',
    id: volunteer.id || '',
    volunteerName: volunteer.volunteerName || '',
    dateOfBirth: volunteer.dateOfBirth || '',
    volunteeraddress: volunteer.volunteeraddress || '',
    email: volunteer.email || '',
    volunteermobileNo: volunteer.volunteermobileNo || '',
    username: volunteer.username || '',
    password: volunteer.password || '',
    securityQuestion: volunteer.securityQuestion || '',
    answer: volunteer.answer || '',
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
      await axios.put(`http://localhost:5000/api/volunteer/${volunteer._id}`, formData);
      window.history.back();
    } catch (error) {
      console.error('Error updating volunteer:', error);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default FUpdateVolunteer;
