import  { useState } from 'react';
import Axios from 'axios';

const UserFMember = () => {
  const [id, setid] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    mobileNo: '',
    username: '',
    password: '',
    dateOfBirth: '', 
    BeVolunteer:'',// New field for Date of Birth
    securityQuestion: '',
    answer: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
    
  const handleSubmit = async (e) => {
    e.preventDefault();

      try {
        const response = await Axios.post('http://localhost:5000/api/member-table', formData);
        alert(response.data.message);
        setid(response.data.id);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Registration failed. Please try again.');
      }
    }
  
  return { formData, errors, handleInputChange, handleSubmit };
};

export default UserFMember;
