import { useState } from 'react';
import Axios from 'axios';

const FVolunteer = () => {
  const [formData, setFormData] = useState({
    volunteerId: '',
    id:'',
    volunteerName: '',
    dateOfBirth: '',
    volunteeraddress: '',
    email: '',
   volunteermobileNo: '',
    username: '',
    password: '',
    securityQuestion: '',
    answer: '',
  });

  
  const handleInputChange = async (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'id' && (!formData.name || !formData.mobileNo || !formData.address || !formData.email || formData.dateOfBirth )) {
      try {
        const response = await Axios.get(`http://localhost:5000/api/Member/${value}`);
        const { name, mobileNo, address, email, dateOfBirth } = response.data;
        setFormData((prevFormData) => ({
          ...prevFormData,
          volunteerName: prevFormData.volunteerName || name,
          volunteermobileNo: prevFormData.volunteermobileNo || mobileNo,
          volunteeraddress: prevFormData.volunteeraddress || address,
          email: prevFormData.email || email,
          dateOfBirth: prevFormData.dateOfBirth || dateOfBirth,
         
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  } 
 
  return { formData, handleInputChange,setFormData };

};

export default FVolunteer;
