import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FViewSourceTable from '../functions/FViewSourceTable';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewSourceTable = () => {
  const [sources, setSources] = useState([]);
  const [error, setError] = useState(null);
  const { fetchSources, handleUpdate, handleDelete } = FViewSourceTable();
  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchSources();
        setSources(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchSources]);

  return (
    <>
    <div className="container mt-5 pt-5">
      
      <h1 className="text-center">Source Table</h1>
      <div className="d-flex justify-content-center mb-3">
  <Link to="/adminsourceform" className="btn btn-danger btn-lg me-2">Add New</Link>
  <Link to="/admin" className="btn btn-danger btn-lg">Back</Link>
</div>
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped border rounded">
        <thead className="table-dark text-center">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact Person</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sources.map(source => (
            <tr key={source._id}>
              <td>{source.sourceId}</td>
              <td>{source.name}</td>
              <td>{source.address}</td>
              <td>{source.contactPerson}</td>
              <td>{source.mobileNo}</td>
              <td>{source.email}</td>
              <td>
                <div className="d-flex">
                  <button type="button" className="btn btn-danger me-2" onClick={() => handleUpdate(source)}> Edit</button>
                  <button type="button" className="btn btn-secondary" onClick={() => handleDelete(source)}> Delete</button>
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

export default ViewSourceTable;
