import  { useState } from 'react';
import Axios from 'axios';

const FMember = () => {
  const [id, setid] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    mobileNo: '',
    username: '',
    password: '',
    dateOfBirth: '', 
    BeVolunteer:'',
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


  return { formData, errors, handleInputChange, handleSubmit,id };
};

export default FMember;
