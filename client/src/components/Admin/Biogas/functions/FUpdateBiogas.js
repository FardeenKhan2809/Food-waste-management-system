import { useState } from 'react';
import axios from 'axios';

const FUpdateBiogas = (biogas, navigate) => {
  const [formData, setFormData] = useState({
    biogasId: biogas?.biogasId || '',
    biogasName: biogas?.biogasName || '',
    biogasEmail: biogas?.biogasEmail || '',
    biogasMobileNo: biogas?.biogasMobileNo || '',
    biogasAddress: biogas?.biogasAddress || '',
    biogasSlurryLimit: biogas?.biogasSlurryLimit || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const mobileNoRegex = /^[6-9]\d{9}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.biogasEmail.includes('@')) {
      setShowAlert(true);
      setErrorMessage('Invalid Email format.');
      return;
    }

    if (!formData.biogasMobileNo.toString().match(mobileNoRegex)) {
      setShowAlert(true);
      setErrorMessage('Invalid mobile number format.');
      return;
    }

    if (formData.biogasAddress.trim() === '') {
      setShowAlert(true);
      setErrorMessage('Provide Address Properly !.');
      return;
    }

    if (formData.biogasName.match(/[0-9!@#$%^&*]/)) {
      setShowAlert(true);
      setErrorMessage('Biogas Plant Name should not contain any digits or special characters.');
      return;
    }

    try {
      await axios.put(`http://localhost:5000/api/biogas/${biogas._id}`, formData);
      setFormData({
        biogasId: '',
        biogasName: '',
        biogasAddress: '',
        biogasMobileNo: '',
        biogasEmail: '',
        biogasSlurryLimit: '',
      });
      window.history.back();
    } catch (error) {
      console.error('Error updating biogas:', error);
    }
  };

  return { formData, handleChange, handleSubmit, errorMessage, showAlert };
};

export default FUpdateBiogas;
