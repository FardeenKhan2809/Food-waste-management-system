import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateVolunteer from '../functions/FUpdateVolunteer';
import { Input, Button, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';


function UpdateVolunteer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { volunteer } = location.state;
  const { formData, handleChange, handleSubmit } = FUpdateVolunteer(volunteer, navigate);

  return (
    <>
    <AdminNavbar/>
    <div className="container mt-4">
      <Typography variant='h3' className="text-center mb-4">Edit Volunteer</Typography>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody className='text-center'>
          <tr>
              <td>
                <label htmlFor="id" className="font-bold form-label">Volunteer ID:</label>
              </td>
              <td>
                <Input variant='standard' type="text" name="volunteerId" value={formData.volunteerId} readOnly onChange={handleChange} placeholder="Enter ID" />
              </td>
            </tr>
            
            <tr>
              <td>
                <label htmlFor="id" className="font-bold form-label">Member ID:</label>
              </td>
              <td>
                <Input variant='standard' type="text" name="id" value={formData.id} readOnly onChange={handleChange} placeholder="Enter ID" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="name" className="font-bold form-label">Name:</label>
              </td>
              <td>
                <Input variant='standard' type="text" name="volunteerName" value={formData.volunteerName} onChange={handleChange} placeholder="Enter Name" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="dateOfBirth" className="font-bold form-label">Date of Birth:</label>
              </td>
              <td>
                <Input variant='standard' type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="address" className="font-bold form-label">Address:</label>
              </td>
              <td>
                <Input variant='standard' type="text" name="volunteeraddress" value={formData.volunteeraddress} onChange={handleChange} placeholder="Enter Address" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email" className="font-bold form-label">Email:</label>
              </td>
              <td>
                <Input variant='standard' type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="mobileNo" className="font-bold form-label">Mobile No:</label>
              </td>
              <td>
                <Input variant='standard' type="text" name="volunteermobileNo" value={formData.volunteermobileNo} onChange={handleChange} placeholder="Enter Mobile No" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="username" className="font-bold form-label">Username:</label>
              </td>
              <td>
                <Input variant='standard' type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter Username" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password" className="font-bold form-label">Password:</label>
              </td>
              <td>
                <Input variant='standard' type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="securityQuestion" className="font-bold form-label">Security Question:</label>
              </td>
              <td>
                <Input variant='standard' type="text" name="securityQuestion" value={formData.securityQuestion} onChange={handleChange} placeholder="Enter Security Question" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="answer" className="font-bold form-label">Answer:</label>
              </td>
              <td>
                <Input variant='standard' type="text" name="answer" value={formData.answer} onChange={handleChange} placeholder="Enter Answer" />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <Button type="submit" color="green" size="lg" onClick={handleSubmit}>Confirm</Button>
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

export default UpdateVolunteer;
