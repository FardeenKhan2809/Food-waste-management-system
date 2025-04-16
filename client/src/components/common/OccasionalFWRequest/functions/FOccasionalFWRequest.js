import  { useState } from 'react';
import Axios from 'axios';

const FRegularFWRequest = () => {
  const [requestId, setrequestId] = useState('');
  const [formData, setFormData] = useState({
    description: '',
    requesterName:'',
    address: '',
    email: '',
    date:'',
    mobileNo: '',
    date: '', 
    approxQuantity: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

 
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
        const response = await Axios.post('http://localhost:5000/api/Occasional-fw', formData);
        if (response.data.success) {
        alert(response.data.message);
        setrequestId(response.data.requestId);
         setFormData({
          description: '',
          requesterName:'',
          address: '',
          email: '',
          mobileNo: '',
          date: '', 
          approxQuantity: '',
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
        console.error('Error submitting Occasional Request:', error);
        alert('Request Failed. Please try again.');
      }
    }


  return { formData, handleInputChange, handleSubmit,requestId,errorMessage,showAlert};
};

export default FRegularFWRequest;
