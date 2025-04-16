import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserFViewMember from '../functions/UserFViewMember';
import { Button, Typography } from '@material-tailwind/react'; 
import UserNavbar from '../../UserNavbar';
import Footer from '../../../Footer/Footer'; 

function UserViewMember() {
  const { members, error } = UserFViewMember();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleUpdate = (member) => {
    navigate(`/update/members/${member._id}`, { state: { member } });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <UserNavbar />
    <div className="container mt-5 pt-5">
    <Typography variant="h3" className="text-center mb-3">Members</Typography>
      <div className="flex justify-center mb-3">
          <Link to="/usermemberform">
            <Button className='mr-2' color="green" >
              Add New
            </Button>
          </Link>
          <Link to="/user">
            <Button color="light-blue" >
              Back
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-center mb-3">
        <Typography className="form-label font-bold mt-2 mr-2">Search by Name:</Typography>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="form-control w-50 mb-2 mt-2"
        />
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
          {filteredMembers.map(member => (
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
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer />
    </>
  );
}

export default UserViewMember;
