import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserFViewVolunteer from '../functions/UserFViewVolunteer';
import { Button, Typography } from '@material-tailwind/react';
import UserNavbar from '../../UserNavbar';
import Footer from '../../../Footer/Footer';


function UserViewVolunteer() {
  const { volunteers, error } = UserFViewVolunteer();
  const navigate = useNavigate();

  const handleUpdate = (volunteer) => {
    navigate(`/update/volunteer/${volunteer._id}`, { state: { volunteer } });
  };
  
  return (
    <>
    <UserNavbar/>
    <div className="container mt-4 pt-4">
      <Typography variant='h3' className="text-center mb-3">Volunteer</Typography>
      <div className="flex justify-center mb-3">
        <Link to="/uservolunteerform">
          <Button color="green" size="lg" className="me-2">Add New</Button>
        </Link>
        <Link to="/user">
          <Button color="light-blue" size="lg">Back</Button>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <table className="table-auto w-full border border-collapse rounded">
        <thead className="bg-gray-700 text-white text-center">
          <tr>
            <th className="px-4 py-2">Volunteer ID</th>
            <th className="px-4 py-2">MemberID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Mobile No</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Date of Birth</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map(volunteer => (
            <tr key={volunteer._id} className="text-center">
              <td className="border px-4 py-2">{volunteer.volunteerId}</td>
              <td className="border px-4 py-2">{volunteer.id}</td>
              <td className="border px-4 py-2">{volunteer.volunteerName}</td>
              <td className="border px-4 py-2">{volunteer.email}</td>
              <td className="border px-4 py-2">{volunteer.volunteermobileNo}</td>
              <td className="border px-4 py-2">{volunteer.volunteeraddress}</td>
              <td className="border px-4 py-2">{volunteer.dateOfBirth}</td>
              <td className="border px-4 py-2">
                <div className="flex justify-center">
                  <Button color="green" onClick={() => handleUpdate(volunteer)} className="me-2">Edit</Button>
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

export default UserViewVolunteer;
