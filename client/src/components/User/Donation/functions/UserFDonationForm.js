import { useState } from 'react';
import Axios from 'axios';

const UserFDonationForm = () => {
  const [formData, setFormData] = useState({
    donationId: '',
    donationType: '',
    description: '',
    donationDate: '',
    donorName: '',
    donorMobileNo: '',
    donorEmail: '',
    donationPaymentMode: '',
    donationAmount: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error for the current field when it's updated
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Example validation rules, adjust as needed
    if (!formData.donationType) {
      newErrors.donationType = 'Donation Type is required';
      isValid = false;
    }

    if (!formData.donationPaymentMode) {
      newErrors.donationPaymentMode = 'Donation Payment Mode is required';
      isValid = false;
    }

    if (!formData.donationAmount || isNaN(formData.donationAmount) || formData.donationAmount <= 0) {
      newErrors.donationAmount = 'Valid donation amount is required';
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
        const response = await Axios.post('http://localhost:5000/api/donations', formData);

        // Display a success message
        alert(response.data.message);
      } catch (error) {
        console.error('Error submitting donation form:', error);
        // Display an error message
        alert('Donation submission failed. Please try again.');
      }
    } else {
      alert('Form validation failed. Please check the fields.');
    }
  };

  return { formData, errors, handleInputChange, handleSubmit };
};

export default UserFDonationForm;
