import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FOViewMember from '../functions/FOViewMember';

function OViewMember() {
  const { members, error } = FOViewMember();
  const navigate = useNavigate();

  const handleUpdate = (member) => {
    navigate(`/update/members/${member._id}`, { state: { member } });
  };

  const handleDelete = (member) => {
    navigate(`/delete/members/${member._id}`, { state: { member } });
  };
  
  return (
    <>
    <div className="container mt-5 pt-5">
      
      <h1 className="text-center">Members</h1>
      <div className="d-flex justify-content-center mb-3">
  <Link to="/adminmemberform" className="btn btn-danger btn-lg me-2">Add New</Link>
  <Link to="/admin" className="btn btn-danger btn-lg">Back</Link>
</div>
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped border rounded">
        <thead className="table-dark text-center">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>Date of Birth</th>
            <th>Username</th>
            <th>Password</th>
            <th>Volunteer Request</th>
            <th>Security Question</th>
            <th>Answer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member._id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.mobileNo}</td>
              <td>{member.address}</td>
              <td>{member.dateOfBirth}</td>
              <td>{member.username}</td>
              <td>{member.password}</td>
              <td>{member.BeVolunteer}</td>
              <td>{member.securityQuestion}</td>
              <td>{member.answer}</td>
              <td>
                <div className="d-flex">
                  <button type="button" className="btn btn-danger me-2" onClick={() => handleUpdate(member)}> Edit</button>
                  <button type="button" className="btn btn-secondary" onClick={() => handleDelete(member)}> Delete</button>
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
