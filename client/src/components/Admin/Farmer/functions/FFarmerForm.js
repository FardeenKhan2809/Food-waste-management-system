import { useState } from 'react';
import Axios from 'axios';

const FFarmerForm = () => {
  const [formData, setFormData] = useState({
    farmerId: '',
    farmerName: '',
    farmerMobileNo: '',
    farmerEmail: '',
    farmerAddress:'',
    farmerUsername: '',
    farmerPassword: '',
    farmerSecurityQuestion: '',
    farmerAnswer: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.farmerId) {
      newErrors.farmerId = 'Farmer ID is required';
      isValid = false;
    }

    if (!formData.farmerName) {
      newErrors.farmerName = 'Farmer Name is required';
      isValid = false;
    }

    if (!formData.farmerMobileNo || !/^\d{10}$/.test(formData.farmerMobileNo)) {
      newErrors.farmerMobileNo = 'Valid 10-digit Farmer Mobile No is required';
      isValid = false;
    }

    if (!formData.farmerEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.farmerEmail)) {
      newErrors.farmerEmail = 'Valid email is required';
      isValid = false;
    }

    if (!formData.farmerAddress) {
      newErrors.farmerAddress = 'Address is required';
      isValid = false;
    }

    if (!formData.farmerUsername) {
      newErrors.farmerUsername = 'Username is required';
      isValid = false;
    }

    if (!formData.farmerPassword || formData.farmerPassword.length < 6) {
      newErrors.farmerPassword = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (!formData.farmerSecurityQuestion) {
      newErrors.farmerSecurityQuestion = 'Security Question is required';
      isValid = false;
    }

    if (!formData.farmerAnswer) {
      newErrors.farmerAnswer = 'Answer is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await Axios.post('http://localhost:5000/api/farmers', formData);

        alert(response.data.message);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Farmer creation failed. Please try again.');
      }
    } else {
      alert('Form validation failed. Please check the fields.');
    }
  };

  return { formData, errors, handleInputChange, handleSubmit };
};

export default FFarmerForm;
