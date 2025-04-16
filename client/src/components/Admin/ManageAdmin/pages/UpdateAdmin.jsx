import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateadmin from '../functions/FUpdateAdmin';
import { Input, Button, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';

function Updateadmin() {
  const location = useLocation();
  const navigate = useNavigate();
  const { admin } = location.state;
  const { formData, handleChange, handleSubmit } = FUpdateadmin(admin, navigate);

  return (
    <>
      <AdminNavbar />
      <div className="container mt-5">
        <Typography variant='h3' className="text-center">Update admin</Typography>
        <form onSubmit={handleSubmit} className="mt-4">
          <table className="table table-bordered">
            <tbody className='text-center'>
            <tr>
                <th>ID:</th>
                <td>
                  <Input variant='standard' type="text" name="aid" value={formData.aid} onChange={handleChange} />
                </td>
              </tr>
              
              <tr>
                <th>Name:</th>
                <td>
                  <Input variant='standard' type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>
                  <Input variant='standard' type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Mobile No:</th>
                <td>
                  <Input variant='standard' type="text" name="mobileNo"id="mobileNo" value={formData.mobileNo} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Address:</th>
                <td>
                  <Input variant='standard' type="text" name="address" id="address" value={formData.address} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Date of Birth:</th>
                <td>
                  <Input variant='standard' type="text" name="dateOfBirth" id="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Username:</th>
                <td>
                  <Input variant='standard' type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Password:</th>
                <td>
                  <Input variant='standard' type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Security Question:</th>
                <td>
                  <Input variant='standard' type="text" name="securityQuestion" id="securityQuestion" value={formData.securityQuestion} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Answer:</th>
                <td>
                  <Input variant='standard' type="text" name="answer" id="answer" value={formData.answer} onChange={handleChange} />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <Button type="submit" color="green" size="lg">Update</Button>
            <Button color="light-blue" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Updateadmin;
