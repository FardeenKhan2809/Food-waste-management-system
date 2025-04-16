import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FFoodWasteRequestForm from '../Function/FFoodWasteRequestForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const FoodWasteRequestForm = () => {
  const { formData, handleChange } = FFoodWasteRequestForm();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/viewrequests');
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      console.log('Submitting form data:', formData);
      await axios.post('http://localhost:5000/api/foodWasteRequest', formData);
      alert('Form submitted successfully');
    } catch (error) {
      alert('Error submitting form data:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Food Waste Request Form</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <table className="table border-only-outside rounded">
          <tbody>
            <tr>
              <th>
                <label htmlFor="requestId" className="form-label">Request ID:</label>
                <input
                  type="text"
                  name="requestId"
                  value={formData.requestId}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
              <th>
                <label htmlFor="date" className="form-label">Date:</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
            </tr>
            <tr>
              <th>
                <label htmlFor="requesterName" className="form-label">Requester Name:</label>
                <input
                  type="text"
                  name="requesterName"
                  value={formData.requesterName}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
              <th>
                <label htmlFor="approxQuantity" className="form-label">Approx Quantity:</label>
                <input
                  type="number"
                  name="approxQuantity"
                  value={formData.approxQuantity}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
            </tr>
            <tr>
              <th>
                <label htmlFor="sourceId" className="form-label">Source ID:</label>
                <input
                  type="text"
                  name="sourceId"
                  value={formData.sourceId}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
              <th>
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
            </tr>
            <tr>
              <th>
                <label htmlFor="mobileNo" className="form-label">Mobile No:</label>
                <input
                  type="text"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
              <th>
                <label htmlFor="address" className="form-label">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="form-control"
                />
              </th>
            </tr>
            <tr>
            <th colSpan="2" className="text-center">
              <button type="submit" className="btn btn-danger btn-lg me-2" >Submit</button>
              <button type="button" className="btn btn-secondary btn-lg" onClick={handleBack}>Back</button>
            </th>
          </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default FoodWasteRequestForm;
