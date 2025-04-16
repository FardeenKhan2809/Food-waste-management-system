import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FViewDonation from '../functions/FViewDonation';
import { Button, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';

const ViewDonation = () => {
  const [donations, setDonations] = useState([]);
  const [error, setError] = useState(null);
  const { fetchDonation, handleUpdate, handleDelete } = FViewDonation();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDonation();
        setDonations(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchDonation]);

  return (
    <>
      <AdminNavbar />
      <div className="container mt-4 pt-4">
        <Typography variant='h3' className="text-center mb-4">Donations</Typography>
        <div className="flex justify-center mb-3">
          <Link to="/donationform">
            <Button color="green" className="mr-2">Add New</Button>
          </Link>
          <Link to="/admin">
            <Button color="light-blue">Back</Button>
          </Link>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <table className="table-auto w-full border border-collapse rounded">
          <thead className='bg-gray-800 text-white'>
            <tr>
              <th className="px-4 py-2">Donation ID</th>
              <th className="px-4 py-2">Donation Type</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Donation Date</th>
              <th className="px-4 py-2">Donor Name</th>
              <th className="px-4 py-2">Donor Mobile No</th>
              <th className="px-4 py-2">Donation Amount</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation._id}>
                <td className="border px-4 py-2">{donation.donationId}</td>
                <td className="border px-4 py-2">{donation.donationType}</td>
                <td className="border px-4 py-2">{donation.description}</td>
                <td className="border px-4 py-2">{donation.donationDate}</td>
                <td className="border px-4 py-2">{donation.donorName}</td>
                <td className="border px-4 py-2">{donation.donorMobileNo}</td>
                <td className="border px-4 py-2">{donation.donationAmount}</td>
                <td className="border px-4 py-2">
                  <div className="flex">
                    <Button color="green" size="sm" onClick={() => handleUpdate(donation)} className="mr-2">Edit</Button>
                    <Button color="light-blue" size="sm" onClick={() => handleDelete(donation)}>Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default ViewDonation;
