import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography } from '@material-tailwind/react';
import useDeleteFoodWasteSlurry from '../functions/useDeleteFoodWasteSlurry';
import AdminNavbar from '../../../AdminNavbar';
import Footer from '../../../../Footer/Footer';


function DeleteFoodWasteSlurry() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleDelete, deleteMessage } = useDeleteFoodWasteSlurry();
  const [slurry, setSlurry] = useState(null);

  useEffect(() => {
    const fetchSlurry = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/foodwasteslurries/${id}`);
        setSlurry(response.data);
      } catch (error) {
        console.error('Error fetching food waste slurry:', error);
      }
    };

    fetchSlurry();
  }, [id]);

  const handleConfirmDelete = async () => {
    try {
      await handleDelete(id);
      window.alert('Record deleted successfully');
      setSlurry(null);
    } catch (error) {
      console.error('Error deleting food waste slurry:', error);
      window.alert('Failed to delete record');
    }
  };

  return (
    <>
    <AdminNavbar/>
    <div className="container mt-5 pt-5">
      <Typography color="blueGray" variant="h1" className="text-center mb-4">Delete Food Waste Slurry</Typography>
      {slurry && (
        <table className="table table-bordered w-3/4 mx-auto">
          <tbody className='text-center'>
            <tr>
              <th className="w-1/4"><label className="font-bold">Type:</label></th>
              <th className="w-3/4"><input type="text" className="form-control" name="type" value={slurry.type} readOnly /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Quantity:</label></th>
              <th><input type="number" className="form-control" name="quantity" value={slurry.quantity} readOnly /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Date:</label></th>
              <th><input type="text" className="form-control" name="date" value={new Date(slurry.date).toLocaleDateString()} readOnly /></th>
            </tr>
            <tr>
              <th colSpan="2" className="text-center">
                <Button color="green" size="lg" onClick={handleConfirmDelete}>Delete</Button>
                <Button color="light-blue" size="lg" className="ml-2" onClick={() => window.history.back()}>Back</Button>
              </th>
            </tr>
          </tbody>
        </table>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default DeleteFoodWasteSlurry;
