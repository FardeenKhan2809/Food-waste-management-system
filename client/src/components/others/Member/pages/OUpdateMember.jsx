import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FOUpdateMember from '../functions/FOUpdateMember';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function OUpdateMember() {
  const location = useLocation();
  const navigate = useNavigate();
  const { member } = location.state;
  const { formData, handleChange, handleSubmit } = FOUpdateMember(member, navigate);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Edit Member</h1>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th><label className="form-label">Name:</label></th>
              <td><input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th><label className="form-label">Email:</label></th>
              <td><input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th><label className="form-label">Mobile No:</label></th>
              <td><input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th><label className="form-label">Address:</label></th>
              <td><input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th><label className="form-label">Username:</label></th>
              <td><input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th><label className="form-label">Password:</label></th>
              <td><input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th><label className="form-label">Be Volunteer:</label></th>
              <td><input type="text" name="BeVolunteer" value={formData.BeVolunteer} onChange={handleChange} className="form-control" /></td>
            </tr>
            
            <tr>
              <th><label className="form-label">Security Question:</label></th>
              <td><input type="text" name="securityQuestion" value={formData.securityQuestion} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <th><label className="form-label">Answer:</label></th>
              <td><input type="text" name="answer" value={formData.answer} onChange={handleChange} className="form-control" /></td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <button type="submit" className="btn btn-danger btn-lg">Confirm</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default OUpdateMember;
