import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateOccasionalFWRequest from '../functions/FUpdateOccasionalFWRequest';
import {Typography, Input, Button } from '@material-tailwind/react';
import Footer from '../../../Footer/Footer';

function UpdateOccasionalFWRequest() {
  const location = useLocation();
  const navigate = useNavigate();
  const { OccasionalFWRequest } = location.state;
  const { formData, handleChange, handleSubmit } = FUpdateOccasionalFWRequest(OccasionalFWRequest, navigate);

  return (
    <>
    <div className="container mt-5">
      <Typography variant='h3' className="text-center mb-4">Edit Occasional Food-Waste Request</Typography>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th><label className="form-label">Request_Id:</label></th>
              <td><Input variant='standard' type="text" name="requestId" value={formData.requestId} onChange={handleChange} readOnly /></td>
            </tr>
            <tr>
              <th><label className="form-label">Date :</label></th>
              <td><Input variant='standard' type="date" name="date" value={formData.date} onChange={handleChange} /></td>
            </tr>
            <tr>
              <th><label className="form-label">Email:</label></th>
              <td><Input variant='standard' type="email" name="email" value={formData.email} onChange={handleChange} /></td>
            </tr>
            <tr>
              <th><label className="form-label">Mobile No:</label></th>
              <td><Input variant='standard' type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} /></td>
            </tr>
            <tr>
              <th><label className="form-label">Address:</label></th>
              <td><Input variant='standard' type="text" name="address" value={formData.address} onChange={handleChange} /></td>
            </tr>
            <tr>
              <th><label className="form-label">Description :</label></th>
              <td><Input variant='standard' type="text" name="description" value={formData.description} onChange={handleChange} /></td>
            </tr>
            <tr>
              <th><label className="form-label">Requester Name:</label></th>
              <td><Input variant='standard' type="text" name="requesterName" value={formData.requesterName} onChange={handleChange} /></td>
            </tr>
            <tr>
              <th><label className="form-label">Approx Quantity :</label></th>
              <td><Input variant='standard' type="text" name="approxQuantity" value={formData.approxQuantity} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <Button type="submit" color="green" size="lg" className='me-2'>Confirm</Button>
                <Button color="light-blue" size="lg" onClick={() => window.history.back()}>Back</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default UpdateOccasionalFWRequest;
