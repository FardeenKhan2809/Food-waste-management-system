import  { useState } from 'react';
import axios from 'axios';

const FRouteForm = () => {
  const [formData, setFormData] = useState({
    routeName: '',
    routeLandmark: '',
    transporterId: '',
    transporterdriveName: '',
    transportermobileNo: '',
    transportervehicleNo: '',
    transporterlicenseNo: '',
    transporteraddress: '',
    transporterrentRate: '',
    volunteerId: '',
    volunteerName: '',
    volunteeraddress: '',  
    volunteermobileNo: '',
    
  });
 


  const handleChange = async (e) => {
    const { name, value } = e.target;
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  
    if (name === 'transporterId' && (!formData.driverName || !formData.mobileNo || !formData.address || !formData.vehicleNo || !formData.licenseNo || !formData.rentRate)) {
      try {
        const response = await axios.get(`http://localhost:5000/api/Transporter/${value}`);
        const { driverName, mobileNo, address, rentRate, vehicleNo, licenseNo } = response.data;
        setFormData((prevFormData) => ({
          ...prevFormData,
          transporterdriveName: prevFormData.transporterdriveName || driverName,
          transportermobileNo: prevFormData.transportermobileNo || mobileNo,
          transporteraddress: prevFormData.transporteraddress || address,
          transporterrentRate: prevFormData.transporterrentRate || rentRate,
          transportervehicleNo: prevFormData.transportervehicleNo || vehicleNo,
          transporterlicenseNo: prevFormData.transporterlicenseNo || licenseNo,
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
  if (name === 'volunteerId' && (!formData.volunteerName || !formData.volunteermobileNo || !formData.volunteeraddress)) {
      try {
        const response = await axios.get(`http://localhost:5000/api/volunteer/${value}`);
        const { volunteerName, volunteermobileNo, volunteeraddress } = response.data;
        setFormData((prevFormData) => ({
          ...prevFormData,
          volunteerName: prevFormData.volunteerName || volunteerName,
          volunteermobileNo: prevFormData.volunteermobileNo || volunteermobileNo,
          volunteeraddress: prevFormData.volunteeraddress || volunteeraddress,
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
  };
  

  return { formData, handleChange ,setFormData};
};

export default FRouteForm;
