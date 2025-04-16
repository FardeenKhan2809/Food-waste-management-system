import React, { useState } from 'react';
import { Button, Typography, Input } from '@material-tailwind/react';
import Footer from '../../Footer/Footer';
import ReportFViewVolunteer from './ReportFViewVolunteer';
import VolunteerPrintView from './VolunteerPrintView';

function ReportViewVolunteer() {
  const { volunteers, error } = ReportFViewVolunteer();
  const [searchName, setSearchName] = useState('');
  const [printViewData, setPrintViewData] = useState(null); // State variable to manage print view data

  // Calculate the count of filtered volunteers
  const filteredVolunteers = volunteers.filter(volunteer => {
    return volunteer.volunteerName.toLowerCase().includes(searchName.toLowerCase());
  });

  const totalRecords = filteredVolunteers.length; // Calculate the total count dynamically

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  // Function to handle displaying data in print view
  const handleViewPrint = (data) => {
    setPrintViewData(data);
  };

  return (
    <>
      <div className="container mt-4 pt-4">
        <Typography variant='h3' className="text-center mb-3">Volunteer</Typography>
        <Typography variant='h6' color='green' className="text-center mb-3">Total Volunteers: {totalRecords}</Typography>
        <Button color="light-blue" size="lg" className='mb-2 me-2' onClick={() => window.history.back()}>Back</Button><br></br>
        <div className="flex items-center justify-center mb-3">
          <Typography className="form-label font-bold mt-2 mr-2">Search Volunteer:</Typography>
          <input 
            type="text" 
            placeholder="Search by name" 
            value={searchName} 
            onChange={handleSearchChange} 
            className='form-control w-50 mb-2 mt-2'
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <table className="table-auto w-full border border-collapse rounded">
          <thead className="bg-gray-700 text-white text-center">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Mobile No</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Date of Birth</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredVolunteers.map(volunteer => (
              <tr key={volunteer._id} className="text-center">
                <td className="border px-4 py-2">{volunteer.volunteerId}</td>
                <td className="border px-4 py-2">{volunteer.volunteerName}</td>
                <td className="border px-4 py-2">{volunteer.email}</td>
                <td className="border px-4 py-2">{volunteer.volunteermobileNo}</td>
                <td className="border px-4 py-2">{volunteer.volunteeraddress}</td>
                <td className="border px-4 py-2">{volunteer.dateOfBirth}</td>
                <td className="border px-4 py-2">
                  <div className="flex justify-center">
                    <Button color="green" className="me-2" onClick={() => handleViewPrint(volunteer)}>View</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
      {/* Conditional rendering of the print view */}
      {printViewData && <VolunteerPrintView data={printViewData} onClose={() => setPrintViewData(null)} />}
    </>
  );
}

export default ReportViewVolunteer;
