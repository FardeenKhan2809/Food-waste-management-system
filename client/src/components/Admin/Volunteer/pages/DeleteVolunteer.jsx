import React from 'react';
import FDeleteVolunteer from '../functions/FDeleteVolunteer';
import { Input, Button, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';


function DeleteVolunteer() {
  const { volunteer, handleDelete } = FDeleteVolunteer();

  if (!volunteer) {
    return <p>Volunteer not found</p>;
  }

  return (
    <>
    <AdminNavbar/>
    <div className="container mt-4">
      <Typography variant='h3' className="text-center mb-4">Delete Volunteer</Typography>
      <form onSubmit={handleDelete}>
        <table className="table table-bordered">
          <tbody className='text-center'>
          <tr>
              <td>
                <label htmlFor="id" className="font-bold form-label">Voluneer ID:</label>
              </td>
              <td>
                <Input type="text" value={volunteer.volunteerId} disabled className="form-control" />
              </td>
            </tr>
            
            <tr>
              <td>
                <label htmlFor="id" className="font-bold form-label"> Member ID:</label>
              </td>
              <td>
                <Input type="text" value={volunteer.id} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="name" className="font-bold form-label">Name:</label>
              </td>
              <td>
                <Input type="text" value={volunteer.volunteerName} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="dateOfBirth" className="font-bold form-label">Date of Birth:</label>
              </td>
              <td>
                <Input type="text" value={volunteer.dateOfBirth} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="address" className="font-bold form-label">Address:</label>
              </td>
              <td>
                <Input type="text" value={volunteer.volunteeraddress} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email" className="font-bold form-label">Email:</label>
              </td>
              <td>
                <Input type="text" value={volunteer.email} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="mobileNo" className="font-bold form-label">Mobile No:</label>
              </td>
              <td>
                <Input type="text" value={volunteer.volunteermobileNo} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="username" className="font-bold form-label">Username:</label>
              </td>
              <td>
                <Input type="text" value={volunteer.username} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password" className="font-bold form-label">Password:</label>
              </td>
              <td>
                <Input type="password" value={volunteer.password} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="securityQuestion" className="font-bold form-label">Security Question:</label>
              </td>
              <td>
                <Input type="text" value={volunteer.securityQuestion} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="answer" className="font-bold form-label">Answer:</label>
              </td>
              <td>
                <Input type="text" value={volunteer.answer} disabled className="form-control" />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <Button type="submit" color="green" size='lg' className="me-2">Delete</Button>
                <Button color="light-blue" size="lg" onClick={() => window.history.back()}>Back</Button>
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

export default DeleteVolunteer;
