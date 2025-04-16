import { useState } from 'react';
import Axios from 'axios';

const FDonationForm = () => {
  const [donationId, setdonationId] = useState('');
  const [formData, setFormData] = useState({
    donationType: '',
    description: '',
    donorName: '',
    donorMobileNo: '',
    donorEmail: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    donationAmount: '',
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

  
  const handleSubmit = async (e) => {
    e.preventDefault();

      try {
        const response = await Axios.post('http://localhost:5000/api/donations', formData);
        if (response.data.success) {
           
        alert(response.data.message);
        setdonationId(response.data.donationId);
        setFormData({
          donationType: '',
    description: '',
    donationDate: '',
    donorName: '',
    donorMobileNo: '',
    donorEmail: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    donationAmount: '',
              });

            window.location.href = '/';
          } else {
              if (response.data.focus) {
                  const field = document.getElementById(response.data.focus);
                  if (field) {
                      field.focus();
                  }
              }
            
              window.alert(response.data.message);
          }  
      
      } catch (error) {
        console.error('Error submitting donation form:', error);
        alert('Donation submission failed. Please try again.');
      }
     
  };

  return { formData, errors, handleInputChange, handleSubmit,donationId };
};

export default FDonationForm;
