import { useState } from 'react';
import axios from 'axios';

const FUpdateMember = (member, navigate) => {
  const [formData, setFormData] = useState({
    id: member.id || '',
    name: member.name || '',
    dateOfBirth: member.dateOfBirth || '',
    address: member.address || '',
    email: member.email || '',
    mobileNo: member.mobileNo || '',
    username: member.username || '',
    password: member.password || '',
    securityQuestion: member.securityQuestion || '',
    answer: member.answer || '',

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
      await axios.put(`http://localhost:5000/api/members/${member._id}`, formData);
      // Redirect to the registrations list after successful update
      navigate('/admin');
    } catch (error) {
      console.error('Error updating member:', error);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default FUpdateMember;
