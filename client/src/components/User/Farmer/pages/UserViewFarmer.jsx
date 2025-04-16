import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserFViewFarmer from '../functions/UserFViewFarmer';
import UserNavbar from '../../UserNavbar';
import Footer from '../../../Footer/Footer';
import { Typography, Button } from '@material-tailwind/react';


function UserViewFarmer() {
  const { farmers, error } = UserFViewFarmer();
  const navigate = useNavigate();

  const handleUpdate = (farmer) => {
    navigate(`/update/farmers/${farmer._id}`, { state: { farmer } });
  };

  
  return (
    <>
    <UserNavbar/>
    <div className="container mt-4 pt-4">
      <Typography variant='h3' className="text-center mb-3">Farmers</Typography>
      <div className="flex justify-center mb-3">
      <Link to="/userfarmerform">
          <Button color="green" className="mr-2">
            Add New
          </Button>
        </Link>
        <Link to="/user">
          <Button color="light-blue">
            Back
          </Button>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <table className="table-auto w-full border border-collapse rounded">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Mobile No</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Password</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map(farmer => (
            <tr key={farmer._id}>
              <td className="border px-4 py-2">{farmer.farmerId}</td>
              <td className="border px-4 py-2">{farmer.farmerName}</td>
              <td className="border px-4 py-2">{farmer.farmerEmail}</td>
              <td className="border px-4 py-2">{farmer.farmerMobileNo}</td>
              <td className="border px-4 py-2">{farmer.farmerAddress}</td>
              <td className="border px-4 py-2">{farmer.farmerUsername}</td>
              <td className="border px-4 py-2">{farmer.farmerPassword}</td>
              <td className="border px-4 py-2">
                <div className="flex">
                  <Button color='green' size='sm' className="me-2" onClick={() => handleUpdate(farmer)}>Edit</Button>
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

export default UserViewFarmer;
