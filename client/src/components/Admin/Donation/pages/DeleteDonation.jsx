import React from 'react';
import { Button, Input, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';
import FDeleteDonation from '../functions/FDeleteDonation';
import { CreditCardIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline';


function DeleteDonation() {
  const { donation, handleDelete } = FDeleteDonation();

  if (!donation) {
    return <p>Donation data not found</p>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="container mt-5">
        <Typography variant='h1' className="text-center">Delete Donation</Typography>
        <form onSubmit={handleDelete} className="mt-4">
          <table className="table table-bordered">
            <tbody className="text-center">
             <tr>
                <td className="form-label font-bold">Donation Type:</td>
                <td>
                <Input
                    variant='standard'
                    type="text"
                    name="donationType"
                    value={donation.donationType}
                    disabled
                  />
                  
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Description:</td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    name="description"
                    value={donation.description}
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Donation Date:</td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    name="donationDate"
                    value={donation.donationDate}
                   disabled
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
                    value={donation.donorName}
                    
                   disabled
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
                    value={donation.donorMobileNo}
                    disabled
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
                    value={donation.donorEmail}
                    disabled
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
                    value={donation.cardNumber}
                    disabled
                  />
                </td>
              </tr>
              <tr><td className="form-label font-bold">Expiry:</td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    name="expiry"
                    value={donation.expiry}
                  disabled
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
                    value={donation.cvv}
                   disabled
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
                    value={donation.donationAmount}
                   disabled
                  />
                </td>
              </tr>
               <tr>
                <td colSpan="2" className="text-center">
                  <Button type="submit" color="green" size="lg">Delete</Button>
                  <Button color="light-blue" size="lg" className="ms-4" onClick={() => window.history.back()}>Back</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default DeleteDonation;
