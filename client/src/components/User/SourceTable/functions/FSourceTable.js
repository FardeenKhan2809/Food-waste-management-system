import { useState } from 'react';
import Axios from 'axios';

const FSourceTable = () => {
  const [formData, setFormData] = useState({
    sourceId: '',
    name: '',
    address: '',
    contactPerson: '',
    mobileNo: '',
    email: '',
    mode: {
      regular: false,
      occasional: false,
    },
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        mode: {
          regular: name === 'regular' ? checked : !checked,
          occasional: name === 'occasional' ? checked : !checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.sourceId) {
      newErrors.sourceId = 'Source ID is required';
      isValid = false;
    }
    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.address) {
      newErrors.address = 'Address is required';
      isValid = false;
    }
    if (!formData.contactPerson) {
      newErrors.contactPerson = 'Contact person is required';
      isValid = false;
    }
    if (!formData.mobileNo || !/^\d{10}$/.test(formData.mobileNo)) {
      newErrors.mobileNo = 'Valid 10-digit mobile number is required';
      isValid = false;
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }
    if (!(formData.mode.regular || formData.mode.occasional)) {
      newErrors.mode = 'Please select a mode';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Send the form data to the server
        const response = await Axios.post('http://localhost:5000/api/source-table', formData);

        // Display a success message
        alert(response.data.message);
      } catch (error) {
        console.error('Error submitting form:', error);
        // Display an error message
        alert('Registration failed. Please try again.');
      }
    }
  };

  return {
    formData,
    errors,
    handleInputChange,
    handleSubmit,
  };
};

export default FSourceTable;
