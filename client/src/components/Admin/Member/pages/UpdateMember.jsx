import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateMember from '../functions/FUpdateMember';
import { Button, Typography, Input } from '@material-tailwind/react'; 
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';


function UpdateMember() {
  const location = useLocation();
  const navigate = useNavigate();
  const { member } = location.state;
  const { formData, handleChange, handleSubmit } = FUpdateMember(member, navigate);

  return (
    <>
    <AdminNavbar/>
    <div className="container mt-5">
      <Typography variant="h3" className="text-center mb-4">Edit Member</Typography>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody className='text-center'>
          <tr>
              <th><label className="font-bold">ID:</label></th>
              <td><Input variant='standard' type="text" name="id" value={formData.id} disabled onChange={handleChange} size="sm" placeholder="Name" /></td>
            </tr>
            <tr>
              <th><label className="font-bold">Name:</label></th>
              <td><Input variant='standard' type="text" name="name" value={formData.name} onChange={handleChange} size="sm" placeholder="Name" /></td>
            </tr>
            <tr>
              <th><label className="font-bold">Email:</label></th>
              <td><Input variant='standard' type="email" name="email" value={formData.email} onChange={handleChange} size="sm" placeholder="Email" /></td>
            </tr>
            <tr>
              <th><label className="font-bold">Mobile No:</label></th>
              <td><Input variant='standard' type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} size="sm" placeholder="Mobile No" /></td>
            </tr>
            <tr>
              <th><label className="font-bold">Address:</label></th>
              <td><Input variant='standard' type="text" name="address" value={formData.address} onChange={handleChange} size="sm" placeholder="Address" /></td>
            </tr>
            <tr>
              <th><label className="font-bold">Username:</label></th>
              <td><Input variant='standard' type="text" name="username" value={formData.username} onChange={handleChange} size="sm" placeholder="Username" /></td>
            </tr>
            <tr>
              <th><label className="font-bold">Password:</label></th>
              <td><Input variant='standard' type="password" name="password" value={formData.password} onChange={handleChange} size="sm" placeholder="Password" /></td>
            </tr>
            <tr>
              <th><label className="font-bold">Security Question:</label></th>
              <td><Input variant='standard' type="text" name="securityQuestion" value={formData.securityQuestion} onChange={handleChange} size="sm" placeholder="Security Question" /></td>
            </tr>
            <tr>
              <th><label className="font-bold">Answer:</label></th>
              <td><Input variant='standard' type="text" name="answer" value={formData.answer} onChange={handleChange} size="sm" placeholder="Answer" /></td>
            </tr>
            <tr>
              <th><label className="font-bold">Be Volunteer :</label></th>
              <td><Input variant='standard' type="text" name="BeVolunteer" value={formData.BeVolunteer} onChange={handleChange} size="sm" placeholder="Answer" /></td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <Button type="submit" color="green" size="lg">Confirm</Button>
                <Button color="light-blue" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default UpdateMember;
