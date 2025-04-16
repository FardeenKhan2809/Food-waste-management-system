import { useState } from 'react';
import Axios from 'axios';

const FTransporterForm = () => {
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
        const response = await Axios.post('http://localhost:5000/api/transporters', formData);
        if (response.data.success) {
        alert(response.data.message);
        settransporterId(response.data.transporterId);
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
        console.error('Error submitting form:', error);
        alert('Transporter creation failed. Please try again.');
      }
  }  
      
    
  

  return { formData, errors, handleInputChange, handleSubmit, transporterId };
};

export default FTransporterForm;
