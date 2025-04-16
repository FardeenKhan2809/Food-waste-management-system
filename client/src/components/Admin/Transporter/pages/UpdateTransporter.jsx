import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateTransporter from '../functions/FUpdateTransporter';
import { Button, Input, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';

function UpdateTransporter() {
  const location = useLocation();
  const navigate = useNavigate();
  const { transporter } = location.state;
  const { formData, handleChange, handleSubmit } = FUpdateTransporter(transporter, navigate);

  return (
    <>
    <AdminNavbar/>
    <div className="container mt-5">
      <Typography variant='h3' className="text-center mb-4">Edit Transporter</Typography>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <td><label className="font-bold">Transporter ID:</label></td>
              <td><Input variant='standard' type="text" name="transporterId" value={formData.transporterId} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label className="font-bold">Vehicle No:</label></td>
              <td><Input variant='standard' type="text" name="vehicleNo" value={formData.vehicleNo} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label className="font-bold">Vehicle Type:</label></td>
              <td><Input variant='standard' type="text" name="vehicleType" value={formData.vehicleType} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label className="font-bold">Driver Name:</label></td>
              <td><Input variant='standard' type="text" name="driverName" value={formData.driverName} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label className="font-bold">License No:</label></td>
              <td><Input variant='standard' type="text" name="licenseNo" value={formData.licenseNo} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label className="font-bold">Mobile No:</label></td>
              <td><Input variant='standard' type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label className="font-bold">Email:</label></td>
              <td><Input variant='standard' type="email" name="email" value={formData.email} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label className="font-bold">Rent Rate:</label></td>
              <td><Input variant='standard' type="text" name="rentRate" value={formData.rentRate} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <Button type="submit" color="green" size="lg">Confirm</Button>
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

export default UpdateTransporter;
