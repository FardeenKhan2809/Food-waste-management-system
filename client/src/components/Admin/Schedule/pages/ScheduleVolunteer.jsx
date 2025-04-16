import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
import FScheduleVolunteer from '../functions/FScheduleVolunteer';

function ScheduleVolunteer() {
  const { volunteers, error } = FScheduleVolunteer();

  return (
    <>
      <div className="container mt-5 pt-5">
        <Typography variant='h3' className="text-center mb-2">Volunteer</Typography>

        {error && <Typography tag="p" color="red" className="text-center">{error}</Typography>}
        
        <table className="table-auto w-full border border-collapse rounded">
          <thead className="bg-gray-800 text-white text-center">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Mobile No</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {volunteers.map(volunteer => (
              <tr key={volunteer._id}>
                <td className="border px-4 py-2">{volunteer.volunteerId}</td>
                <td className="border px-4 py-2">{volunteer.volunteerName}</td>
                <td className="border px-4 py-2">{volunteer.email}</td>
                <td className="border px-4 py-2">{volunteer.volunteermobileNo}</td>
                <td className="border px-4 py-2">{volunteer.volunteeraddress}</td>
                <td className="border px-4 py-2">{volunteer.dateOfBirth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ScheduleVolunteer;
