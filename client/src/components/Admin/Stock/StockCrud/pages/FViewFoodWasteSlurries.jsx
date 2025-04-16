import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import useFViewFoodWasteSlurries from '../functions/useFViewFoodWasteSlurries';
import { Button, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../../AdminNavbar';
import Footer from '../../../../Footer/Footer';


function FViewFoodWasteSlurries() {
  const { foodWasteSlurries, totalSlurry, totalFoodWaste, error } = useFViewFoodWasteSlurries();
  const navigate = useNavigate();

  const handleUpdate = (slurry) => {
    
    navigate(`/updateFoodWasteSlurry/${slurry._id}`, { state: { slurry: slurry } });
  };

  const handleDelete = (slurry) => {
    navigate(`/deleteFoodWasteSlurry/${slurry._id}`, { state: { slurry: slurry } });
  };

  return (
    <>
    <AdminNavbar/>
      <div className="container mt-4 pt-4">
        <Typography  variant="h3" className="text-center mb-2">Food Waste Slurries</Typography>
        <Link to="/foodwasteslurryform">
          <Button color="green" className="mr-2 mb-3">
            Add New
          </Button>
        </Link>
        <Button color="light-blue" size="lg" className="mb-3" onClick={() => window.history.back()}>Back</Button>
        {error && <Typography color="red" className="text-danger">{error}</Typography>}
        <table className="table-auto w-full border border-collapse rounded">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className='px-4 py-2'>Type</th>
              <th className='px-4 py-2'>Quantity</th>
              <th className='px-4 py-2'>Date</th>
              <th className='px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foodWasteSlurries.map(foodWasteSlurry => (
              <tr key={foodWasteSlurry._id}>
                <td className='border px-4 py-2'>{foodWasteSlurry.type}</td>
                <td className='border px-4 py-2'>{foodWasteSlurry.quantity}</td>
                <td className='border px-4 py-2'>{new Date(foodWasteSlurry.date).toLocaleDateString()}</td>
                <td className='border px-4 py-2'>
                <div className="flex justify-center">
                    <Button color="green" className="me-2" onClick={() => handleUpdate(foodWasteSlurry)}>Edit</Button>
                    <Button color="light-blue" onClick={() => handleDelete(foodWasteSlurry)}>Delete</Button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  );
}

export default FViewFoodWasteSlurries;
