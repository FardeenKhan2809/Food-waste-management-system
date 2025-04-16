import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button,Typography } from '@material-tailwind/react';
import FViewadmin from '../functions/FViewAdmin';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';


function Viewadmin() {
  const { admin, error } = FViewadmin();
  const navigate = useNavigate();

  const handleUpdate = (admin) => {
    navigate(`/update/admin/${admin._id}`, { state: { admin } });
  };

  const handleDelete = (admin) => {
    navigate(`/delete/admin/${admin._id}`, { state: { admin } });
  };

  return (
    <>
    <AdminNavbar/>
      <div className="container mt-4 pt-4">
        <Typography variant='h3' className="text-center mb-3">View Admin</Typography>
        <div className="flex justify-center mb-3">
          <Link to="/createadmin">
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
            {admin.map(admin => (
              <tr key={admin._id} className="text-center">
                <td className="px-4 py-2">{admin.aid}</td>
                <td className="px-4 py-2">{admin.name}</td>
                <td className="px-4 py-2">{admin.email}</td>
                <td className="px-4 py-2">{admin.mobileNo}</td>
                <td className="px-4 py-2">{admin.username}</td>
                <td className="px-4 py-2">{admin.password}</td>
                <td className="px-4 py-2">
                  <div className="flex justify-center">
                    <Button color="green" size="sm" className="me-2" onClick={() => handleUpdate(admin)}>
                      Edit
                    </Button>
                    <Button color="light-blue" size="sm" onClick={() => handleDelete(admin)}>
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

export default Viewadmin;
