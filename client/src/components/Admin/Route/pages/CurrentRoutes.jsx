import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FCurrentRoutes from '../functions/FCurrentRoutes';

function CurrentRoutes() {
  const { routes, error } = FCurrentRoutes();
  
  const navigate = useNavigate();

  
  return (
    <>
    <div className="container mt-5 pt-5">
      
      <h1 className="text-center">Routes</h1>
      
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped border rounded">
        <thead className="table-dark text-center">
          <tr>
          <th>Route ID</th>
            <th>Date</th>
            <th>Route Name</th>
            <th>Route Landmark</th>
            <th>Transporter ID</th>
            <th>Driver Name</th>
            <th>Mobile No</th>
            <th>Volunteer ID</th>
            <th>Volunteer Name</th>
            <th>Volunteer Mobile No</th>
            
          </tr>
        </thead>
        <tbody>
          {routes.map(route => (
            <tr key={route._id}>
              <td>{route.routeId}</td>
              <td>{route.routeName}</td>
              <td>{route.date}</td>
              <td>{route.routeLanndmark}</td>
              <td>{route.transporterId}</td>
              <td>{route.transporterdriveName}</td>
              <td>{route.transportermobileNo}</td>
              <td>{route.volunteerId}</td>
              <td>{route.volunteerName}</td>
              <td>{route.volunteermobileNo}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    </>
  );
}

export default CurrentRoutes;
