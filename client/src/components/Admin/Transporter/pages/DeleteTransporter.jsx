import React from 'react';
import FDeleteTransporter from '../functions/FDeleteTransporter';
import { Button, Input, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';


function DeleteTransporter() {
  const { transporter, handleDelete } = FDeleteTransporter();

  if (!transporter) {
    return <p className="text-center mt-5">Transporter not found</p>;
  }

  return (
    <>
    <AdminNavbar/>
    <div className="container mt-5">
      <Typography className="text-center mb-4">Delete transporter</Typography>
      <form onSubmit={handleDelete} className="mt-4">
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <td><label className="font-bold">Transporter ID:</label></td>
              <td><Input type="text" value={transporter.transporterId} disabled /></td>
            </tr>
            <tr>
              <td><label className="font-bold">Vehicle No:</label></td>
              <td><Input type="text" value={transporter.vehicleNo} disabled /></td>
            </tr>
            <tr>
              <td><label className="font-bold">Vehicle Type:</label></td>
              <td><Input type="text" value={transporter.vehicleType} disabled /></td>
            </tr>
            <tr>
              <td><label className="font-bold">Driver Name:</label></td>
              <td><Input type="text" value={transporter.driverName} disabled /></td>
            </tr>
            <tr>
              <td><label className="font-bold">License No:</label></td>
              <td><Input type="text" value={transporter.licenseNo} disabled /></td>
            </tr>
            <tr>
              <td><label className="font-bold">Mobile No:</label></td>
              <td><Input type="text" value={transporter.mobileNo} disabled /></td>
            </tr>
            <tr>
              <td><label className="font-bold">Email:</label></td>
              <td><Input type="text" value={transporter.email} disabled /></td>
            </tr>
            <tr>
              <td><label className="font-bold">Rent Rate:</label></td>
              <td><Input type="text" value={transporter.rentRate} disabled /></td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <Button type="submit" color="green" size="lg">Delete</Button>
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

export default DeleteTransporter;
