import React from 'react';
import FDeleteReg from '../functions/FDeleteReg';
import { Button, Input, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';

function DeleteReg() {
  const { registration, handleDelete } = FDeleteReg();

  if (!registration) {
    return <p>Farmer not found</p>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="container mt-5">
        <Typography variant='h3' className="text-center">Delete Registration</Typography>
        <form onSubmit={handleDelete} className="mt-4">
          <table className="table table-bordered">
            <tbody className='text-center'>
              <tr>
                <th>Name:</th>
                <td><Input type="text" value={registration.name} disabled /></td>
              </tr>
              <tr>
                <th>Email:</th>
                <td><Input type="email" value={registration.email} disabled /></td>
              </tr>
              <tr>
                <th>Mobile No:</th>
                <td><Input type="text" value={registration.mobileNo} disabled /></td>
              </tr>
              <tr>
                <th>Address:</th>
                <td><Input type="text" value={registration.address} disabled /></td>
              </tr>
              <tr>
                <th>Date of Birth:</th>
                <td><Input type="text" value={registration.dateOfBirth} disabled /></td>
              </tr>
              <tr>
                <th>Username:</th>
                <td><Input type="text" value={registration.username} disabled /></td>
              </tr>
              <tr>
                <th>Password:</th>
                <td><Input type="password" value={registration.password} disabled /></td>
              </tr>
              <tr>
                <th>Security Question:</th>
                <td><Input type="text" value={registration.securityQuestion} disabled /></td>
              </tr>
              <tr>
                <th>Answer:</th>
                <td><Input type="text" value={registration.answer} disabled /></td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <Button type="submit" color="green" size="lg">Delete</Button>
            <Button color="light-blue" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default DeleteReg;
