import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button,Typography } from '@material-tailwind/react';
import FViewclerk from '../functions/FViewClerk';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';


function Viewclerk() {
  const { clerk, error } = FViewclerk();
  const navigate = useNavigate();

  const handleUpdate = (clerk) => {
    navigate(`/update/clerk/${clerk._id}`, { state: { clerk } });
  };

  const handleDelete = (clerk) => {
    navigate(`/delete/clerk/${clerk._id}`, { state: { clerk } });
  };

  return (
    <>
    <AdminNavbar/>
      <div className="container mt-4 pt-4">
        <Typography variant='h3' className="text-center mb-3">View Clerk</Typography>
        <div className="flex justify-center mb-3">
          <Link to="/createclerk">
            <Button className='mr-2' color="green" >
              Add New
            </Button>
          </Link>
          <Link to="/admin">
            <Button color="light-blue" >
              Back
            </Button>
          </Link>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <table className="table-auto w-full text-center">
          <thead className="bg-gray-800 text-white">
            <tr>
            <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Mobile No</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Password</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clerk.map(clerk => (
              <tr key={clerk._id} className="text-center">
                <td className="px-4 py-2">{clerk.cid}</td>
                <td className="px-4 py-2">{clerk.name}</td>
                <td className="px-4 py-2">{clerk.email}</td>
                <td className="px-4 py-2">{clerk.mobileNo}</td>
                <td className="px-4 py-2">{clerk.username}</td>
                <td className="px-4 py-2">{clerk.password}</td>
                <td className="px-4 py-2">
                  <div className="flex justify-center">
                    <Button color="green" size="sm" className="me-2" onClick={() => handleUpdate(clerk)}>
                      Edit
                    </Button>
                    <Button color="light-blue" size="sm" onClick={() => handleDelete(clerk)}>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  );
}

export default Viewclerk;
