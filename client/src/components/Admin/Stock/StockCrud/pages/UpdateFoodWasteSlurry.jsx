import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Input } from '@material-tailwind/react';
import useUpdateFoodWasteSlurry from '../functions/useUpdateFoodWasteSlurry';
import AdminNavbar from '../../../AdminNavbar';
import Footer from '../../../../Footer/Footer';

function UpdateFoodWasteSlurry() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { formData, handleChange, handleSubmit, fetchFoodWasteSlurry } = useUpdateFoodWasteSlurry();
  const [updateMessage, setUpdateMessage] = useState('');

  useEffect(() => {
    fetchFoodWasteSlurry(id);
  }, [fetchFoodWasteSlurry, id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(id);
    setUpdateMessage('Record updated successfully');
    setTimeout(() => {
      setUpdateMessage('');
    }, 3000);
  };

  return (
    <>
    <AdminNavbar/>
    <div className="container mt-4 pt-4">
      <Typography  variant="h3" className="text-center mb-4">Update Food Waste Slurry</Typography>
      <form onSubmit={handleFormSubmit}>
        <table className="table table-bordered w-3/4 mx-auto">
          <tbody className='text-center'>
            <tr>
              <th className="w-1/4"><label className="font-bold">Type:</label></th>
              <th className="w-3/4"><Input variant='standard' type="text" name="type" value={formData.type} readOnly /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Quantity:</label></th>
              <th><Input variant='standard' type="number" name="quantity" value={formData.quantity} onChange={handleChange} /></th>
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

export default UpdateFoodWasteSlurry;
