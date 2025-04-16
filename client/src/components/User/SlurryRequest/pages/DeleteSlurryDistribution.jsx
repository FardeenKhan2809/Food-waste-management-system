import React from 'react';
import { Button, Typography, Input } from '@material-tailwind/react';
import { useDeleteSlurryDistribution } from '../functions/useDeleteSlurryDistribution';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';

const DeleteSlurryDistribution = () => {
  const { formData, handleDelete, loading, navigate } = useDeleteSlurryDistribution();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleDelete();
    window.alert('Slurry distribution deleted successfully!');
    window.history.back();
  };

  return (
    <>
    <AdminNavbar/>
    <div className="container mt-5 pt-5">
      <Typography variant="h1" className="text-center">Delete Slurry Distribution</Typography>
      {loading ? (
        <p>Loading slurry distribution data...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <table className="table table-bordered w-3/4 mx-auto">
            <tbody className='text-center'>
              <tr>
                <th className="w-1/4"><label className="font-bold">Farmer Name:</label></th>
                <th className="w-3/4"><Input variant='standard' type="text" name="farmerName" value={formData.farmerName} readOnly /></th>
              </tr>
              <tr>
                <th><label className="font-bold">Phone Number:</label></th>
                <th><Input variant='standard' type="text" name="mobileNo" value={formData.mobileNo} readOnly /></th>
              </tr>
              <tr>
                <th><label className="font-bold">Address:</label></th>
                <th><Input variant='standard' type="text" name="address" value={formData.address} readOnly /></th>
              </tr>
              <tr>
                <th><label className="font-bold">Date:</label></th>
                <th><Input variant='standard' type="text" disabled name="date" value={formData.date.split('T')[0]} readOnly /></th>
              </tr>
              <tr>
                <th><label className="font-bold">Quantity:</label></th>
                <th><Input variant='standard' type="number" name="quantity" value={formData.quantity} readOnly /></th>
              </tr>
              <tr>
                <th><label className="font-bold">Submission Date:</label></th>
                <th><Input variant='standard' type="date" name="submissionDate" value={formData.submissionDate} readOnly /></th>
              </tr>
              <tr>
                <th colSpan="2" className="text-center">
                  <Button color="green" size="lg" type="submit">Delete</Button>
                  <Button color="light-blue" size="lg" className="ml-2" onClick={() => window.history.back()}>Back</Button>
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default DeleteSlurryDistribution;
