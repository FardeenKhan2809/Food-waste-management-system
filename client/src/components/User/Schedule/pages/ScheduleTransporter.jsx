import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@material-tailwind/react';
import FScheduleTransporter from '../functions/FScheduleTransporter';

function ScheduleTransporter() {
  const { transporters, error } = FScheduleTransporter();
  const navigate = useNavigate();

  return (
    <>
      <div className="container mt-5 pt-5">
        <Typography variant='h3' className="text-center mb-2">Transporter</Typography>

        {error && <Typography tag="p" color="red" className="text-center">{error}</Typography>}
        
        <table className="table-auto w-full border border-collapse rounded">
          <thead className="bg-gray-800 text-white text-center">
            <tr>
              <th className='px-4 py-2'>ID</th>
              <th className='px-4 py-2'>Driver Name</th>
              <th className='px-4 py-2'>Vehicle No</th>
              <th className='px-4 py-2'>Vehicle Type</th>
              <th className='px-4 py-2'>License No</th>
              <th className='px-4 py-2'>Mobile No</th>
              <th className='px-4 py-2'>Email</th>
              <th className='px-4 py-2'>Rent Rate</th>
            </tr>
          </thead>
          <tbody>
            {transporters.map(transporter => (
              <tr key={transporter._id}>
                <td className='border px-4 py-2'>{transporter.transporterId}</td>
                <td className='border px-4 py-2'>{transporter.driverName}</td>
                <td className='border px-4 py-2'>{transporter.vehicleNo}</td>
                <td className='border px-4 py-2'>{transporter.vehicleType}</td>
                <td className='border px-4 py-2'>{transporter.licenseNo}</td>
                <td className='border px-4 py-2'>{transporter.mobileNo}</td>
                <td className='border px-4 py-2'>{transporter.email}</td>
                <td className='border px-4 py-2'>{transporter.rentRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ScheduleTransporter;
