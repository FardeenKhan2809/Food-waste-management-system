import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useUpdateSlurryRequests from '../functions/useUpdateSlurryRequests';
import { Button, Typography, Input } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';

function UpdateSlurryRequests() {
  const { id } = useParams();
  const { formData, handleChange, handleSubmit, fetchSlurryRequest } = useUpdateSlurryRequests();

  useEffect(() => {
    fetchSlurryRequest(id);
  }, [id, fetchSlurryRequest]);

  return (
    <>
    <AdminNavbar/>
    <div className="container mt-4 pt-4">
      <Typography variant="h3" className="text-center mb-4">Update Slurry Request</Typography>
      <form onSubmit={() => handleSubmit(id)}>
        <table className="table table-bordered w-3/4 mx-auto">
          <tbody className='text-center'>
            <tr>
              <th className="w-1/4"><label className="font-bold">Farmer Name:</label></th>
              <th className="w-3/4"><Input variant='standard' type="text" name="farmerName" value={formData.farmerName} onChange={handleChange} /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Phone Number:</label></th>
              <th><Input variant='standard' type="text" name="phoneNumber" value={formData.mobileNo} onChange={handleChange} /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Address:</label></th>
              <th><Input variant='standard' type="text" name="address" value={formData.address} onChange={handleChange} /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Date:</label></th>
              <th><Input variant='standard' type="date" name="date" value={formData.date.split('T')[0]} onChange={handleChange} /></th>
            </tr>
            <tr>
              <th colSpan="2" className="text-center">
                <Button color="green" size="lg" type="submit">Update</Button>
                <Button color="light-blue" size="lg" className="ml-2" onClick={() => window.history.back()}>Back</Button>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default UpdateSlurryRequests;
