import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FViewTransporter from '../functions/FViewTransporter';
import { Button, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';

function ViewTransporter() {
  const { transporters, error } = FViewTransporter();
  const navigate = useNavigate();

  const handleUpdate = (transporter) => {
    navigate(`/update/transporter/${transporter._id}`, { state: { transporter } });
  };

  const handleDelete = (transporter) => {
    navigate(`/delete/transporter/${transporter._id}`, { state: { transporter } });
  };
  
  return (
    <>
    <AdminNavbar/>
      <div className="container mt-5 pt-5">
        <Typography variant='h3' className="text-center mb-3">Transporter</Typography>
        <div className="flex justify-center mb-3">
        <Link to="/admintransporterform">
          <Button color="green" className="mr-2">
            Add New
          </Button>
        </Link>
        <Link to="/admin">
          <Button color="light-blue">
            Back
          </Button>
        </Link>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <table className="table-auto border-collapse border border-black">
          <thead className="bg-gray-800 text-white text-center">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Driver Name</th>
              <th className="px-4 py-2">Vehicle No</th>
              <th className="px-4 py-2">Vehicle Type</th>
              <th className="px-4 py-2">License No</th>
              <th className="px-4 py-2">Mobile No</th>
              <th className="px-4 py-2">Rent Rate</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transporters.map(transporter => (
              <tr key={transporter._id} className="text-center">
                <td className="border px-4 py-2">{transporter.transporterId}</td>
                <td className="border px-4 py-2">{transporter.driverName}</td>
                <td className="border px-4 py-2">{transporter.vehicleNo}</td>
                <td className="border px-4 py-2">{transporter.vehicleType}</td>
                <td className="border px-4 py-2">{transporter.licenseNo}</td>
                <td className="border px-4 py-2">{transporter.mobileNo}</td>
                <td className="border px-4 py-2">{transporter.rentRate}</td>
                <td className="border px-4 py-2">
                  <div className="flex">
                    <Button className='mr-2' color='green' size='sm' onClick={() => handleUpdate(transporter)}>Edit</Button>
                    <Button color='light-blue' size='sm' onClick={() => handleDelete(transporter)}>Delete</Button>
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

export default ViewTransporter;
