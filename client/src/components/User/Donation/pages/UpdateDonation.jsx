import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateDonation from '../functions/FUpdateDonation';
import { Button, Input, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';

function UpdateDonation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { donation } = location.state;
  const { formData, handleChange, handleSubmit } = FUpdateDonation(donation, navigate);

  return (
    <>
      <AdminNavbar />
      <div className="container mt-5">
        <Typography variant='h3' className="text-center mb-4">Edit Donation</Typography>
        <form onSubmit={handleSubmit}>
          <table className="table table-bordered">
            <tbody className="text-center">
              <tr>
                <th className="px-4 py-2 font-bold">Name:</th>
                <td className="px-4 py-2">
                  <Input
                    variant='standard'
                    type="text"
                    name="donorName"
                    value={formData.donorName}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                </td>
              </tr>
              <tr>
                <th className="px-4 py-2 font-bold">Email:</th>
                <td className="px-4 py-2">
                  <Input
                    variant='standard'
                    type="email"
                    name="donorEmail"
                    value={formData.donorEmail}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </td>
              </tr>
              <tr>
                <th className="px-4 py-2 font-bold">Mobile No:</th>
                <td className="px-4 py-2">
                  <Input
                    variant='standard'
                    type="text"
                    name="donorMobileNo"
                    value={formData.donorMobileNo}
                    onChange={handleChange}
                    placeholder="Mobile No"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div colSpan="2" className="text-center mt-4">
            <Button type="submit" color="green" size="lg">Confirm</Button>
            <Button color="light-blue" size="lg" className="ms-4" onClick={() => window.history.back()}>Back</Button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default UpdateDonation;
