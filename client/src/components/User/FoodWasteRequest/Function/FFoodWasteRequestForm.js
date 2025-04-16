import  { useState } from 'react';
import axios from 'axios';

const FFoodWasteRequestForm = () => {
  const [formData, setFormData] = useState({
    requestId: '',
    date: '',
    requesterName: '',
    approxQuantity: '',
    sourceId: '',
    name: '',
    mobileNo: '',
    address: '',
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;

    if (name === 'approxQuantity' && (isNaN(value) || value <= 0)) {
      alert('Approx Quantity should be a positive number');
      return;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === 'sourceId' && (!formData.name || !formData.mobileNo || !formData.address)) {
      try {
        const response = await axios.get(`http://localhost:5000/api/source-table/${value}`);
        const { name, mobileNo, address } = response.data;
        setFormData((prevFormData) => ({
          ...prevFormData,
          name: prevFormData.name || name,
          mobileNo: prevFormData.mobileNo || mobileNo,
          address: prevFormData.address || address,
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  return { formData, handleChange };
};

export default FFoodWasteRequestForm;
