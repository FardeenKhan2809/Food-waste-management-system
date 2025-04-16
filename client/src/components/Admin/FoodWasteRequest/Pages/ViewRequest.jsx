import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FViewRequest from '../Function/FViewRequest';


import 'bootstrap/dist/css/bootstrap.min.css';

const ViewRequest = () => {
  const [requests, setRequest] = useState([]);
  const [error, setError] = useState(null);
  const { fetchfoodwasterequest, handleUpdate, handleDelete } = FViewRequest();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchfoodwasterequest();
        setRequest(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchfoodwasterequest]);

  return (
    <>
    <div className="container mt-5 pt-5">
      
      <h1 className="text-center">Food Waste Requests</h1>
      <div className="d-flex justify-content-center mb-3">
  <Link to="/requestform" className="btn btn-danger btn-lg me-2">Add New</Link>
  <Link to="/admin" className="btn btn-danger btn-lg">Back</Link>
</div>
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped border rounded">
        <thead className="table-dark text-center">
          <tr>
            <th>Request ID</th>
            <th>Source ID</th>
            <th>Requester Name</th>
            <th>Name</th>
            <th>Address</th>
            <th>Date</th>
            <th>Mobile No</th>
            <th>Approx Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request._id}>
              <td>{request.sourceId}</td>
              <td>{request.requestId}</td>
              <td>{request.requesterName}</td>
              <td>{request.name}</td>
              <td>{request.address}</td>
              <td>{request.date}</td>
              <td>{request.mobileNo}</td>
              <td>{request.approxQuantity}</td>
              <td>
                <div className="d-flex">
                  <button type="button" className="btn btn-danger me-2" onClick={() => handleUpdate(request)}><BsPencilSquare /> Edit</button>
                  <button type="button" className="btn btn-secondary" onClick={() => handleDelete(request)}><BsTrash /> Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    </>
  );
};

export default ViewRequest;
