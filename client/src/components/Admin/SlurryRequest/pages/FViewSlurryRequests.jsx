import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFViewSlurryRequests from '../functions/useFViewSlurryRequests';
import { Button, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';


function FViewSlurryRequests() {
  const { slurryRequests, error } = useFViewSlurryRequests();
  const navigate = useNavigate(); 

  const handleUpdate = (slurry) => {
    navigate(`/updateSlurryRequest/${slurry._id}`, { state: { slurry: slurry } });
  };

  const handleDelete = (slurry) => {
    navigate(`/deleteSlurryRequest/${slurry._id}`, { state: { slurry: slurry } });
  };

  const handleAddSlurry = (slurry) => {
    navigate(`/addSlurryRequest/${slurry._id}`, { state: { slurry: slurry } });
  };

  return (
    <>
    <AdminNavbar/>
      <div className="container mt-5 pt-5">
        <Typography variant="h3" className="text-center mb-2">Slurry Requests</Typography>
        <Button color="light-blue" size="lg" className="mb-4" onClick={() => window.history.back()}>Back</Button>
        {error && <Typography color="red" className="text-danger">{error}</Typography>}
        <table className="table-auto w-full border border-collapse rounded">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className='px-4 py-2'>Farmer Name</th>
              <th className='px-4 py-2'>Phone Number</th>
              <th className='px-4 py-2'>Address</th>
              <th className='px-4 py-2'>Date</th>
              <th className='px-4 py-2'>Status</th>
              <th className='px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {slurryRequests.map(slurryRequest => (
              <tr key={slurryRequest._id}>
                <td className='border px-4 py-2'>{slurryRequest.farmerName}</td>
                <td className='border px-4 py-2'>{slurryRequest.mobileNo}</td>
                <td className='border px-4 py-2'>{slurryRequest.address}</td>
                <td className='border px-4 py-2'>{new Date(slurryRequest.date).toLocaleDateString()}</td>
                <td className='border px-4 py-2'>{slurryRequest.status}</td> 
                <td className='border px-4 py-2'>
                  <Button color="green" onClick={() => handleAddSlurry(slurryRequest)}>Add Slurry</Button>
                  <Button color="light-blue" className="mx-2" onClick={() => handleUpdate(slurryRequest)}>Edit</Button>
                  <Button color="red" onClick={() => handleDelete(slurryRequest)}>Delete</Button>
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

export default FViewSlurryRequests;
