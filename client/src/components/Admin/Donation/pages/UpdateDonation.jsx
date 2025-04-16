import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateDonation from '../functions/FUpdateDonation';
import { Button, Input, Typography } from '@material-tailwind/react';
import { CreditCardIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline';
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
                <td className="form-label font-bold">Donation Type:</td>
                <td>
                  <select
                    name="donationType"
                    value={formData.donationType}
                    onChange={handleChange}
                    
                    className="form-select"
                  >
                    <option value="">select Donation Type</option>
                    <option value="Non-Monetary">Monetary</option>
                    <option value="Non-Monetary">Non-Monetary</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Description:</td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                                      />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Donation Date:</td>
                <td>
                  <Input
                    variant='standard'
                    type="date"
                    name="donationDate"
                    value={formData.donationDate}
                    onChange={handleChange}
                    
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Donor Name:</td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    name="donorName"
                    value={formData.donorName}
                    onChange={handleChange}
                    placeholder="Donor Name"
                                    />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Donor Mobile No:</td>
                <td>
                  <Input
                    variant='standard'
                    type="tel"
                    name="donorMobileNo"
                    value={formData.donorMobileNo}
                    onChange={handleChange}
                    placeholder="Donor Mobile No"
                    
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Donor Email:</td>
                <td>
                  <Input
                    variant='standard'
                    type="email"
                    name="donorEmail"
                    value={formData.donorEmail}
                    onChange={handleChange}
                    placeholder="Donor Email"
                                     />
                </td>
              </tr>
              <Typography variant='h4' className="mb-2 mt-2">CARD-DETAILS</Typography>
       
              <tr>
                <td className="form-label font-bold" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CreditCardIcon style={{ width: '20px', height: '20px' }}/></td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="*********9786"
                                     />
                </td>
              </tr>
              <tr><td className="form-label font-bold">Expiry:</td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                                 />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">CVV</td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="CVV"
                              />
                  </td>
              </tr>
              
              <tr>
              <td className="form-label font-bold" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CurrencyRupeeIcon style={{ width: '20px', height: '20px' }}/></td>
                <td>
                  <Input
                    variant='standard'
                    type="number"
                    name="donationAmount"
                    value={formData.donationAmount}
                    onChange={handleChange}
                    placeholder="In Rupees."
                    
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
