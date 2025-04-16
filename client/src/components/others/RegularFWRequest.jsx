import React, { useState } from 'react';
import Axios from 'axios';

const RegularFWRequest = () => {
  const [formData, setFormData] = useState({
    requestId: '',
    organisationName: '',
    date:'',
    requesterName:'',
    address: '',
    email:'',
    mobileNo: '',
    approximateQuantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:5000/api/regular-fw', formData);
      console.log(response.data); // Log the response from the server
      // Reset the form after successful submission
      setFormData({
        requestId: '',
        organisationName: '',
        date:'',
        requesterName:'',
        address: '',
        email:'',
        mobileNo: '',
        approximateQuantity: ''
    
      });
    } catch (error) {
      console.error('Error submitting form:', error.response); // Log the full error response

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Request ID:</label>
        <input type="text" name="requestId" value={formData.requestId} onChange={handleChange} />
      </div>
      <div>
        <label>Organisation Name:</label>
        <input type="text" name="Oname" value={formData.organisationName} onChange={handleChange} />
      </div>
      <div>
        <label>Requester Name:</label>
        <input type="text" name="Rname" value={formData.requesterName} onChange={handleChange} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
      </div>
      <div>
        <label>Email :</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      
      <div>
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </div>
      <div>
        <label>Mobile Number:</label>
        <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} />
      </div>
      
      <div>
        <label>Approximate Quantity:</label>
        <input type="text" name="approximateQuantity" value={formData.approximateQuantity} onChange={handleChange} />
      </div>
      <button type="submit" onSubmit={handleSubmit}>Submit</button>
    </form>
  );
};

export default RegularFWRequest;
