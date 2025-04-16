import React from 'react';
import { Button, Typography } from '@material-tailwind/react';

const VolunteerPrintView = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg print:p-0 print:shadow-none print:bg-transparent print:w-full print:max-w-screen-lg">
        <Typography variant="h5" className="text-center mb-4">Volunteer Details</Typography>
        <div className="mb-4">
          <Typography className="font-bold">ID:</Typography>
          <Typography>{data.volunteerId}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Name:</Typography>
          <Typography>{data.volunteerName}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Email:</Typography>
          <Typography>{data.email}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Mobile No:</Typography>
          <Typography>{data.volunteermobileNo}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Address:</Typography>
          <Typography>{data.volunteeraddress}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Date of Birth:</Typography>
          <Typography>{data.dateOfBirth}</Typography>
        </div>
        <div className="flex justify-center print:hidden">
          <Button color="green" onClick={window.print}>Print</Button>
          <Button color="red" className="ml-2" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPrintView;
