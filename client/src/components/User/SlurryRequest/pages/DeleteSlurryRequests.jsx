import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography, Input } from '@material-tailwind/react';
import useDeleteSlurryRequests from '../functions/useDeleteSlurryRequests';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';

function DeleteSlurryRequests() {
  const { id } = useParams();
  const { fetchSlurry, handleDelete, deleteMessage, slurry } = useDeleteSlurryRequests();

  useEffect(() => {
    fetchSlurry(id); // Fetch slurry data when the component mounts
  }, [id, fetchSlurry]);

  return (
    <>
    <AdminNavbar/>
    <div className="container mt-4 pt-4">
      <Typography variant="h3" className="text-center mb-4">Delete Slurry Request</Typography>
      <form onSubmit={() => handleDelete(id)}>
        <table className="table table-bordered w-3/4 mx-auto">
          <tbody className='text-center'>
            <tr>
              <th className="w-1/4"><label className="font-bold">Farmer Name:</label></th>
              <th className="w-3/4"><Input variant='standard' type="text" name="farmerName" value={slurry?.farmerName || ''} readOnly /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Phone Number:</label></th>
              <th><Input variant='standard' type="text" name="phoneNumber" value={slurry?.mobileNo || ''} readOnly /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Address:</label></th>
              <th><Input variant='standard' type="text" name="address" value={slurry?.address || ''} readOnly /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Date:</label></th>
              <th><Input variant='standard' type="text" name="date" value={slurry?.date ? new Date(slurry.date).toLocaleDateString() : ''} readOnly /></th>
            </tr>
            <tr>
              <th colSpan="2" className="text-center">
                <Button color="green" size="lg" type="submit" disabled={!slurry}>Delete</Button>
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

export default DeleteSlurryRequests;
