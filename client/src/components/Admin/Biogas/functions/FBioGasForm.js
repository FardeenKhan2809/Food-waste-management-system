import  { useState } from 'react';
import Axios from 'axios';

const FBioGasForm = () => {
  const [biogasId, setbiogasId] = useState('');
  const [formData, setFormData] = useState({
    biogasName: '',
    biogasAddress: '',
    biogasMobileNo: '',
    biogasEmail: '',
    biogasSlurryLimit: '',
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();


      try {
        const response = await Axios.post('http://localhost:5000/api/bioWastes', formData);
        if (response.data.success) {
           
        alert(response.data.message);
        setbiogasId(response.data.biogasId);
        setFormData({
          biogasName: '',
          biogasAddress: '',
          biogasMobileNo: '',
          biogasEmail: '',
          biogasSlurryLimit: '',
      });
  
      window.location.href = '/admin';
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
        console.error('Error submitting BioGas Plant:', error);
        alert('Biogas creation failed. Please try again.');
      }
   
  };

  return { formData,handleInputChange, handleSubmit,biogasId };
};

export default FBioGasForm;
