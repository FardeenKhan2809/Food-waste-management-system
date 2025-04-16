import { useState } from 'react';
import axios from 'axios';

const FUpdateTransporter = (transporter, navigate) => {
  const [formData, setFormData] = useState({
    transporterId: transporter.transporterId || '',
    vehicleNo: transporter.vehicleNo || '',
    vehicleType: transporter.vehicleType || '',
    driverName: transporter.driverName || '',
    licenseNo: transporter.licenseNo || '',
    mobileNo: transporter.mobileNo || '',
    email: transporter.email || '',
    rentRate: transporter.rentRate || '',
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
      await axios.put(`http://localhost:5000/api/transporters/${transporter._id}`, formData);
      window.history.back();
    } catch (error) {
      console.error('Error updating transporter:', error);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default FUpdateTransporter;
