import React from 'react';
import FDeleteSource from '../functions/FDeleteSource';
import 'bootstrap/dist/css/bootstrap.min.css';

function DeleteSource() {
  const { source, handleDelete } = FDeleteSource();

  if (!source) {
    return <p>Source not found</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Delete Source</h1>
      <form onSubmit={handleDelete} className="mt-4">
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th>Name:</th>
              <td><input type="text" value={source.name} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Email:</th>
              <td><input type="email" value={source.email} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Mobile No:</th>
              <td><input type="text" value={source.mobileNo} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Address:</th>
              <td><input type="text" value={source.address} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Contact Person:</th>
              <td><input type="text" value={source.contactPerson} disabled className="form-control" /></td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <button type="submit" className="btn btn-danger btn-lg">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default DeleteSource;
