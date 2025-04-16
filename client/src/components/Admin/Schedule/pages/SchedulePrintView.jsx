import React from 'react';
import { Button, Typography } from '@material-tailwind/react';

const SchedulePrintView = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg print:p-0 print:shadow-none print:bg-transparent print:w-full print:max-w-screen-lg max-h-full overflow-y-auto">
        <Typography variant="h5" className="text-center mb-4">Schedule Details</Typography>
        <div className="mb-4">
          <Typography className="font-bold">Request ID:</Typography>
          <Typography>{data.requestId}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Route Name:</Typography>
          <Typography>{data.routeName}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Organisation Name:</Typography>
          <Typography>{data.organisationName}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Description:</Typography>
          <Typography>{data.description}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Requester Name:</Typography>
          <Typography>{data.requesterName}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Date:</Typography>
          <Typography>{data.date}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Email:</Typography>
          <Typography>{data.email}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Mobile No:</Typography>
          <Typography>{data.mobileNo}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Approx Quantity:</Typography>
          <Typography>{data.approxQuantity}</Typography>
        </div>
        <div className="flex justify-center print:hidden">
          <Button color="green" onClick={window.print}>Print</Button>
          <Button color="red" className="ml-2" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default SchedulePrintView;
