import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FAdminViewRegularFWRequest from '../functions/FAdminViewRegularFWRequest';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';
import { Typography, Button } from '@material-tailwind/react';

const AdminViewRegularFWRequest = () => {
  const [regularFWRequests, setRegularFWRequests] = useState([]);
  const [error, setError] = useState(null);
  const { fetchRegularRequest, handleUpdate, handleDelete } = FAdminViewRegularFWRequest();
  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchRegularRequest();
        setRegularFWRequests(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchRegularRequest]);

  return (
    <>
      <AdminNavbar />
      <div className="container mt-4 pt-4">
        <Typography variant='h3' className="text-center mb-4">Regular FW Request Table</Typography>
        <div className="flex justify-center mb-3">
        <Link to="/others/regularfwrequest">
          <Button color="green" className="mr-2">
            Add New
          </Button>
        </Link>
        <Link to="/admin">
          <Button color="light-blue">
            Back
          </Button>
        </Link>
        </div>
        {error && <p className="text-danger">{error}</p>}
        <table className="table-auto w-full border border-collapse rounded">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2">Request ID</th>
              <th className="px-4 py-2">Organisation Name</th>
              <th className="px-4 py-2">Requester Name</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Mobile No</th>
              <th className="px-1 py-1">approxQuantity</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {regularFWRequests.map(regularFWRequest => (
              <tr key={regularFWRequest._id}>
                <td className="border px-4 py-2">{regularFWRequest.requestId}</td>
                <td className="border px-4 py-2">{regularFWRequest.organisationName}</td>
                <td className="border px-4 py-2">{regularFWRequest.requesterName}</td>
                <td className="border px-4 py-2">{regularFWRequest.date}</td>
                <td className="border px-4 py-2">{regularFWRequest.address}</td>
                <td className="border px-4 py-2">{regularFWRequest.mobileNo}</td>
                <td className="border px-1 py-1">{regularFWRequest.approxQuantity}</td>
                <td className="border px-4 py-2">
                  <div className="d-flex">
                    <Button color='green' size='sm' className=" me-2" onClick={() => handleUpdate(regularFWRequest)}>Edit</Button>
                    <Button color='light-blue' size='sm'  onClick={() => handleDelete(regularFWRequest)}>Delete</Button>
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

export default AdminViewRegularFWRequest;
