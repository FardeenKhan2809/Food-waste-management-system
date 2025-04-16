import React from 'react';
import FDeleteFarmer from '../functions/FDeleteFarmer';
import {Button, Typography, Input } from '@material-tailwind/react';
import Footer from '../../../Footer/Footer';

function DeleteFarmer() {
  const { farmer, handleDelete } = FDeleteFarmer();

  if (!farmer) {
    return <p>Farmer not found</p>;
  }

  return (
    <>
    <div className="container mt-5">
      <Typography variant='h3' className="text-center">Delete Farmer</Typography>
      <form onSubmit={handleDelete} className="mt-4">
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th className="font-bold">Farmer ID:</th>
              <td><Input variant='h3' type="text" value={farmer.farmerId} disabled className="p-2 border border-gray-500 rounded" /></td>
            </tr>
            <tr>
              <th className="font-bold">Farmer Name:</th>
              <td><Input variant='h3' type="text" value={farmer.farmerName} disabled className="p-2 border border-gray-500 rounded" /></td>
            </tr>
            <tr>
              <th className="font-bold">Email:</th>
              <td><Input variant='h3' type="email" value={farmer.farmerEmail} disabled className="p-2 border border-gray-500 rounded" /></td>
            </tr>
            <tr>
              <th className="font-bold">Mobile No:</th>
              <td><Input variant='h3' type="text" value={farmer.farmerMobileNo} disabled className="p-2 border border-gray-500 rounded" /></td>
            </tr>
            <tr>
              <th className="font-bold">Address:</th>
              <td><Input variant='h3' type="text" value={farmer.farmerAddress} disabled className="p-2 border border-gray-500 rounded" /></td>
            </tr>
            <tr>
              <th className="font-bold">Username:</th>
              <td><Input variant='h3' type="text" value={farmer.farmerUsername} disabled className="p-2 border border-gray-500 rounded" /></td>
            </tr>
            <tr>
              <th className="font-bold">Password:</th>
              <td><Input variant='h3' type="password" value={farmer.farmerPassword} disabled className="p-2 border border-gray-500 rounded" /></td>
            </tr>
            <tr>
              <th className="font-bold">Security Question:</th>
              <td><Input variant='h3' type="text" value={farmer.farmerSecurityQuestion} disabled className="p-2 border border-gray-500 rounded" /></td>
            </tr>
            <tr>
              <th className="font-bold">Answer:</th>
              <td><Input variant='h3' type="text" value={farmer.farmerAnswer} disabled className="p-2 border border-gray-500 rounded" /></td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <Button type="submit" color='green'  >Delete</Button>
                <Button color="light-blue" size="lg" className="ms-4" onClick={() => window.history.back()}>Back</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default DeleteFarmer;
