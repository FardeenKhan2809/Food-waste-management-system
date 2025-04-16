import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateFarmer from '../functions/FUpdateFarmer';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';
import { Button, Typography, Input } from '@material-tailwind/react';

function UpdateFarmer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { farmer } = location.state;
  const { formData, handleChange, handleSubmit } = FUpdateFarmer(farmer, navigate);

  return (
    <>
    <div className="container mt-5">
      <Typography variant='h3' className="text-center mb-4">Edit Farmer Details..</Typography>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th className="font-bold">Farmer Name:</th>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="farmerName"
                  value={formData.farmerName}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th className="font-bold">Email:</th>
              <td>
                <Input
                  variant='standard'
                  type="email"
                  name="farmerEmail"
                  value={formData.farmerEmail}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th className="font-bold">Mobile No:</th>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="farmerMobileNo"
                  value={formData.farmerMobileNo}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th className="font-bold">Address:</th>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="farmerAddress"
                  value={formData.farmerAddress}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th className="font-bold">Username:</th>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="farmerUsername"
                  value={formData.farmerUsername}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th className="font-bold">Password:</th>
              <td>
                <Input
                  variant='standard'
                  type="password"
                  name="farmerPassword"
                  value={formData.farmerPassword}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th className="font-bold">Security Question:</th>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="farmerSecurityQuestion"
                  value={formData.farmerSecurityQuestion}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th className="font-bold">Answer:</th>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="farmerAnswer"
                  value={formData.farmerAnswer}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <Button type='submit' color='green' size='lg' className="me-2">Confirm</Button>
                <Button color="light-blue" size="lg"  onClick={() => window.history.back()}>Back</Button>
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

export default UpdateFarmer;
