import { useState } from 'react';
import axios from 'axios';

const FUpdateDonation = (donation, navigate) => {
    const [formData, setFormData] = useState({
        donationId: donation.donationId || '',
        donationType: donation.donationType || '',
        description: donation.description || '',
        donationDate: donation.donationDate || '',
        donorName: donation.donorName || '',
        donorMobileNo: donation.donorMobileNo || '',
        donorEmail: donation.donorEmail || '',
        donationAmount: donation.donationAmount || '',
        cardNumber:donation.cardNumber || '',
        expiry : donation.expiry || '',
        cvv : donation.cvv || '',
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
      await axios.put(`http://localhost:5000/api/donation/${donation._id}`, formData);
      window.history.back();
    } catch (error) {
      console.error('Error updating donation:', error);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default FUpdateDonation;
