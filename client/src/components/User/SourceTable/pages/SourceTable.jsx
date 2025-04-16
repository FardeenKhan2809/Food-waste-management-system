import React from 'react';
import { useNavigate } from 'react-router-dom';
import FSourceTable from '../functions/FSourceTable';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SourceTable = () => {
  const { formData, errors, handleInputChange, handleSubmit } = FSourceTable();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/adminviewsource');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Source Table</h1>
      <form onSubmit={handleSubmit}>
        <table className="table border-only-outside rounded">
          <tbody>
            <tr>
              <th>
                <label htmlFor="sourceId" className="form-label">Source ID:</label>
                <input
                  type="text"
                  name="sourceId"
                  value={formData.sourceId}
                  onChange={handleInputChange}
                  className="form-control"
                />
                {errors.sourceId && <span className="text-danger">{errors.sourceId}</span>}
              </th>
              <th>
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-control"
                />
                {errors.name && <span className="text-danger">{errors.name}</span>}
              </th>
            </tr>
            <tr>
              <th>
                <label htmlFor="address" className="form-label">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="form-control"
                />
                {errors.address && <span className="text-danger">{errors.address}</span>}
              </th>
              <th>
                <label htmlFor="contactPerson" className="form-label">Contact Person:</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  className="form-control"
                />
                {errors.contactPerson && <span className="text-danger">{errors.contactPerson}</span>}
              </th>
            </tr>
            <tr>
              <th>
                <label htmlFor="mobileNo" className="form-label">Mobile No:</label>
                <input
                  type="tel"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleInputChange}
                  className="form-control"
                />
                {errors.mobileNo && <span className="text-danger">{errors.mobileNo}</span>}
              </th>
              <th>
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control"
                />
                {errors.email && <span className="text-danger">{errors.email}</span>}
              </th>
            </tr>
            <tr>
              <th colSpan="2">
                <label className="form-label">Mode:</label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="regular"
                    checked={formData.mode.regular}
                    onChange={handleInputChange}
                    className="form-check-input"
                  />
                  <label className="form-check-label">Regular</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="occasional"
                    checked={formData.mode.occasional}
                    onChange={handleInputChange}
                    className="form-check-input"
                  />
                  <label className="form-check-label">Occasional</label>
                </div>
                {errors.mode && <span className="text-danger">{errors.mode}</span>}
              </th>
            </tr>
            <tr>
              <th colSpan="2" className="text-center">
                <button type="submit" className="btn btn-danger btn-lg me-2">Register</button>
                <button type="button" className="btn btn-secondary btn-lg" onClick={handleBack}>Back</button>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default SourceTable;
