import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateSource from '../functions/FUpdateSource';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateSource() {
  const location = useLocation();
  const navigate = useNavigate();
  const { source } = location.state;
  const { formData, handleChange, handleSubmit } = FUpdateSource(source, navigate);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Edit Registration</h1>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th className="text-center">Name:</th>
              <td>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
              </td>
            </tr>
            <tr>
              <th className="text-center">Email:</th>
              <td>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
              </td>
            </tr>
            <tr>
              <th className="text-center">Mobile No:</th>
              <td>
                <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className="form-control" />
              </td>
            </tr>
            <tr>
              <th className="text-center">Address:</th>
              <td>
                <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" />
              </td>
            </tr>
            <tr>
              <th className="text-center">Contact Person:</th>
              <td>
                <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} className="form-control" />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <button type="submit" className="btn btn-danger btn-lg">Confirm</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default UpdateSource;
