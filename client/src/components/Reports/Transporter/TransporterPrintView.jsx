import React from 'react';
import { Button, Typography } from '@material-tailwind/react';

const TransporterPrintView = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg print:p-0 print:shadow-none print:bg-transparent print:w-full print:max-w-screen-lg max-h-full overflow-y-auto">
        <Typography variant="h5" className="text-center mb-4">Transporter Details</Typography>
        <div className="mb-4">
          <Typography className="font-bold">ID:</Typography>
          <Typography>{data.transporterId}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Driver Name:</Typography>
          <Typography>{data.driverName}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Vehicle No:</Typography>
          <Typography>{data.vehicleNo}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Vehicle Type:</Typography>
          <Typography>{data.vehicleType}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">License No:</Typography>
          <Typography>{data.licenseNo}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Mobile No:</Typography>
          <Typography>{data.mobileNo}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Email:</Typography>
          <Typography>{data.email}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Rent Rate:</Typography>
          <Typography>{data.rentRate}</Typography>
        </div>
        <div className="flex justify-center print:hidden">
          <Button color="green" onClick={window.print}>Print</Button>
          <Button color="red" className="ml-2" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default TransporterPrintView;
