import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../../../Footer/Footer";
import FViewRoute from '../functions/FViewRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Typography } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';


const ViewRoute = () => {
  const [routes, setRoutes] = useState([]);
  const [error, setError] = useState(null);
  const { fetchRoutes, handleUpdate, handleDelete } = FViewRoute();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchRoutes();
        setRoutes(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchRoutes]);

  return (
    <>
    <AdminNavbar/>
    <div className="container mt-5 pt-5">
      <Typography variant='h3' className="text-center mb-3">Routes</Typography>
      <div className="flex justify-center mb-3">
          <Link to="/adminrouteform">
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
        {error && <p className="text-danger">{error}</p>}
      <table className="table-auto w-full text-center">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">Route ID</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Route Name</th>
            <th className="px-4 py-2">Route Landmark</th>
            <th className="px-4 py-2">Transporter ID</th>
            <th className="px-4 py-2">Driver Name</th>
            <th className="px-4 py-2">Volunteer ID</th>
            <th className="px-4 py-2">Volunteer Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {routes.map(route => (
            <tr key={route._id}>
              <td className="border px-4 py-2">{route.routeId}</td>
              <td className="border px-4 py-2">{route.date}</td>
              <td className="border px-4 py-2">{route.routeName}</td>
              <td className="border px-4 py-2">{route.routeLandmark}</td>
              <td className="border px-4 py-2">{route.transporterId}</td>
              <td className="border px-4 py-2">{route.transporterdriveName}</td>
              <td className="border px-4 py-2">{route.volunteerId}</td>
              <td className="border px-4 py-2">{route.volunteerName}</td>
              <td className="border px-4 py-2">
                <div className="flex justify-center">
                  <Button type="button" color="green" size="sm" className="me-2" onClick={() => handleUpdate(route)}>Edit</Button>
                  <Button type="button" color="light-blue" size="sm" className="me-2" onClick={() => handleDelete(route)}>Delete</Button>
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
};

export default ViewRoute;
