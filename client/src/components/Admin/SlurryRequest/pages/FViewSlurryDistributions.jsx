import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFViewSlurryDistributions from '../functions/useFViewSlurryDistributions';
import { Button, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';



function FViewSlurryDistributions() {
  const { slurryDistributions, error } = useFViewSlurryDistributions();
  const navigate = useNavigate();

  const handleEdit = (distribution) => {
    navigate(`/updateslurrydistibution/${distribution._id}`, { state: { distribution } });
  };

  const handleDelete = (distribution) => {
    navigate(`/deleteslurrydistribution/${distribution._id}`, { state: { distribution } });
  };
  

  return (
    <>
    <AdminNavbar/>
      <div className="container mt-4 pt-4">
        <Typography variant="h3" className="text-center mb-2">Slurry Distributions</Typography>
        <Button color="light-blue" size="lg" className="mb-2" onClick={() => window.history.back()}>Back</Button>
        {error && <Typography color="red" className="text-danger">{error}</Typography>}
        <table className="table-auto w-full border border-collapse rounded">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className='px-4 py-2'>Farmer Name</th>
              <th className='px-4 py-2'>Phone Number</th>
              <th className='px-4 py-2'>Address</th>
              <th className='px-4 py-2'>Slurry Request Date</th>
              <th className='px-4 py-2'>Quantity</th>
              <th className='px-4 py-2'>Submission Date</th>
              <th className='px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {slurryDistributions.map(distribution => (
              <tr key={distribution._id}>
                <td className='border px-4 py-2'>{distribution.farmerName}</td>
                <td className='border px-4 py-2'>{distribution.mobileNo}</td>
                <td className='border px-4 py-2'>{distribution.address}</td>
                <td className='border px-4 py-2'>{new Date(distribution.date).toLocaleDateString()}</td>
                <td className='border px-4 py-2'>{distribution.quantity}</td>
                <td className='border px-4 py-2'>{new Date(distribution.submissionDate).toLocaleDateString()}</td> {/* Show submission date */}
                <td className='border px-4 py-2'>
                <div className="flex justify-center">
                  <Button color="green" className="me-2" onClick={() => handleEdit(distribution)}>Edit</Button>
                  <Button color="light-blue" onClick={() => handleDelete(distribution)}>Delete</Button>
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

export default FViewSlurryDistributions;
