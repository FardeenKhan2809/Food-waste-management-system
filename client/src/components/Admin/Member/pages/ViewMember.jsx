import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FViewMember from '../functions/FViewMember';
import {Typography, Button } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';

function OViewMember() {
  const { members, error } = FViewMember();
  const navigate = useNavigate();

  const handleUpdate = (member) => {
    navigate(`/update/members/${member._id}`, { state: { member } });
  };

  const handleDelete = (member) => {
    navigate(`/delete/members/${member._id}`, { state: { member } });
  };
  
  return (
    <>
    <AdminNavbar/>
    <div className="container mt-5 pt-5">
    <Typography variant="h3" className="text-center mb-3">Members</Typography>
      <div className="flex justify-center mb-3">
          <Link to="/adminmemberform">
            <Button className='mr-2' color="green" >
              Add New
            </Button>
          </Link>
          <Link to="/admin">
            <Button color="light-blue" >
              Back
            </Button>
          </Link>
        </div>
        
      {error && <p className="text-danger">{error}</p>}
      <table className="table-auto w-full text-center">
          <thead className="bg-gray-800 text-white">
           <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Mobile No</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Date of Birth</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Volunteer Request</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member._id}>
              <td className="border px-4 py-2">{member.id}</td>
              <td className="border px-4 py-2">{member.name}</td>
              <td className="border px-4 py-2">{member.email}</td>
              <td className="border px-4 py-2">{member.mobileNo}</td>
              <td className="border px-4 py-2">{member.address}</td>
              <td className="border px-4 py-2">{member.dateOfBirth}</td>
              <td className="border px-4 py-2">{member.username}</td>
              <td className="border px-4 py-2">{member.BeVolunteer}-</td>
              <td className="border px-4 py-2">
                <div className="d-flex">
                  <Button type="button" color="green" size="sm" className="me-2" onClick={() => handleUpdate(member)}> Edit</Button>
                  <Button type="button" color="light-blue" size="sm" className="me-2" onClick={() => handleDelete(member)}> Delete</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    </>
  );
}

export default OViewMember;
