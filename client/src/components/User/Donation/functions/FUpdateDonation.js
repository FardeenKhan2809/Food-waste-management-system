import { useState } from 'react';
import axios from 'axios';

const FUpdateDonation = (donation, navigate) => {
    const [formData, setFormData] = useState({
        donationId: donation.donationId || '',
        donationType: donation.donationType || '',
        description: donation.description || '',
        donationDate: donation.donationDate || '',
        donorName: donation.donorName || '',
        donorAddress: donation.donorAddress || '',
        donorMobileNo: donation.donorMobileNo || '',
        donorEmail: donation.donorEmail || '',
        donationPaymentMode: donation.donationPaymentMode || '',
        donationAmount: donation.donationAmount || '',
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
      // Redirect to the registrations list after successful update
      window.history.back();
    } catch (error) {
      console.error('Error updating donation:', error);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default FUpdateDonation;
