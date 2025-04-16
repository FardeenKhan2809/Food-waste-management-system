import React from 'react';
import FDeleteOccasionalFWRequest from '../functions/FDeleteOccasionalFWRequest';
import { Typography, Button, Input } from '@material-tailwind/react';
import Footer from '../../../Footer/Footer';

function DeleteOccasionalFWRequest() {
  const { OccasionalFWRequest, handleDelete } = FDeleteOccasionalFWRequest();

  if (!OccasionalFWRequest) {
    return <p>OccasionalFWRequest not found</p>;
  }

  return (
    <>
    <div className="container mt-5">
      <Typography variant='h3' className="text-center">Delete Occasional Food-Waste Request</Typography>
      <form onSubmit={handleDelete} className="mt-4">
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th>Request ID:</th>
              <td><Input type="text" value={OccasionalFWRequest.requestId} disabled /></td>
            </tr>
            <tr>
              <th>Description:</th>
              <td><Input type="text" value={OccasionalFWRequest.description} disabled /></td>
            </tr>
            
            <tr>
              <th>Requester Name:</th>
              <td><Input type="text" value={OccasionalFWRequest.requesterName} disabled /></td>
            </tr>
            
            <tr>
              <th>Email:</th>
              <td><Input type="email" value={OccasionalFWRequest.email} disabled /></td>
            </tr>
            <tr>
              <th>Mobile No:</th>
              <td><Input type="text" value={OccasionalFWRequest.mobileNo} disabled /></td>
            </tr>
            <tr>
              <th>Address:</th>
              <td><Input type="text" value={OccasionalFWRequest.address} disabled /></td>
            </tr>
            <tr>
              <th>Approx Quantity:</th>
              <td><Input type="text" value={OccasionalFWRequest.approxQuantity} disabled /></td>
            </tr>
            
            <tr>
              <td colSpan="2" className="text-center">
                <Button type="submit" color="green" size="lg">Delete</Button>
                <Button color="light-blue" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
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

export default DeleteOccasionalFWRequest;
