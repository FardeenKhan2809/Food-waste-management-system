import { useState } from 'react';
import Axios from 'axios';

const UserFTransporterForm = () => {
  const [transporterId,settransporterId]=useState('');
  const [formData, setFormData] = useState({
    vehicleNo: '',
    vehicleType: '',
    driverName: '',
    licenseNo: '',
    mobileNo: '',
    email: '',
    rentRate: '',
    address: '',
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
        // Send the form data to the server
        const response = await Axios.post('http://localhost:5000/api/transporters', formData);
        if (response.data.success) {
          // Display a success message
          alert(response.data.message);
          settransporterId(response.data.transporterId);
            // Reset form fields
            setFormData({
              vehicleNo: '',
      vehicleType: '',
      driverName: '',
      licenseNo: '',
      mobileNo: '',
      email: '',
      rentRate: '',
      address: '',
          });
      
          // Redirect to login page
          window.location.href = '/user';
      } else {
          // If registration failed and there's a field to focus on
          if (response.data.focus) {
              const field = document.getElementById(response.data.focus);
              if (field) {
                  field.focus();
              }
          }
          
          // Display error message
          window.alert(response.data.message);
      }      } catch (error) {
        console.error('Error submitting form:', error);
        // Display an error message
        alert('Transporter creation failed. Please try again.');
      }
    } 
  

  return { formData, errors, handleInputChange, handleSubmit,transporterId };
};

export default UserFTransporterForm;
