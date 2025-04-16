import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography, Input } from '@material-tailwind/react';
import useAddSlurryDistributionForm from '../functions/useAddSlurryDistributionForm';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';

function AddSlurryDistributionForm() {
  const { id } = useParams();
  const { slurryRequest, loading, error, handleChange, handleSubmit, successMessage } = useAddSlurryDistributionForm(id);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <>
    <AdminNavbar/>
    <div className="container mt-4 pt-4">
      <Typography  variant="h3" className="text-center mb-4">Add Slurry Request</Typography>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered w-3/4 mx-auto">
          <tbody className='text-center'>
            <tr>
              <th className="w-1/4"><label className="font-bold">Farmer Name:</label></th>
              <th className="w-3/4"><Input variant='standard' type="text" name="farmerName" value={slurryRequest.farmerName} onChange={handleChange} required /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Phone Number:</label></th>
              <th><Input variant='standard' type="text" name="mobileNo" value={slurryRequest.mobileNo} onChange={handleChange} required /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Address:</label></th>
              <th><Input variant='standard' type="text" name="address" value={slurryRequest.address} onChange={handleChange} required /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Date:</label></th>
              <th><Input variant='standard' type="date" name="date" value={slurryRequest.date} onChange={handleChange} required /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Quantity:</label></th>
              <th><Input variant='standard' type="number" name="quantity" value={slurryRequest.quantity} onChange={handleChange} required /></th>
            </tr>
            <input type="hidden" name="submissionDate" value={slurryRequest.submissionDate} />
            <tr>
              <th colSpan="2" className="text-center">
                <Button color="green" size="lg" type="submit">Submit</Button>
                <Button color="light-blue" size="lg" className="ml-2" onClick={() => window.history.back()}>Back</Button>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
    </div>
    <Footer/>
    </>
  );
}

export default AddSlurryDistributionForm;
