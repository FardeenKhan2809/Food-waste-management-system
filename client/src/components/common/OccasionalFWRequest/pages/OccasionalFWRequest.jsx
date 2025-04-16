import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FOccasionalFWFWRequest from '../functions/FOccasionalFWRequest';
import { Button, Input, Typography } from '@material-tailwind/react';
import Footer from '../../../Footer/Footer';

const OccasionalFWRequest = () => {
  const { formData, handleInputChange, handleSubmit, requestId } = FOccasionalFWFWRequest();

  const getCurrentDate = () => {
    const now = new Date();
    now.setDate(now.getDate() - 1);

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const currentDate = getCurrentDate();
    handleInputChange({ target: { name: 'date', value: currentDate } });
  }, []);

  return (
    <>
    <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
      <Typography variant="h3" className="text-center mb-4">
        Occasional Food Waste Request
      </Typography>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                <label htmlFor="desc" className="form-label font-bold">
                  Description
                </label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter Description"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="Rname" className="form-label font-bold">
                  Requester Name:
                </label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="requesterName"
                  id="requesterName"
                  value={formData.requesterName}
                  onChange={handleInputChange}
                  placeholder="Enter Requester Name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="Tdate" className="form-label font-bold">
                  Date :
                </label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date}
                  readOnly
                  onChange={handleInputChange}
                  placeholder="Select Date"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="Address" className="form-label font-bold">
                  Address:
                </label>
              </td>
              <td>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={4}
                  className="border border-gray-300 p-2 rounded-md w-full"
                  placeholder="Enter Address"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="Email" className="form-label font-bold">
                  Email:
                </label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="MobileNo" className="form-label font-bold">
                  Mobile No:
                </label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="mobileNo"
                  id="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleInputChange}
                  placeholder="Enter Mobile No"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="aaproxqty" className="form-label font-bold">
                  Approx Quantity :
                </label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  name="approxQuantity"
                  id="approxQuantity"
                  value={formData.approxQuantity}
                  onChange={handleInputChange}
                  placeholder="Enter Approx Quantity"
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <Button type="submit" color="green" size="lg" className="me-2">
                  Request
                </Button>
                <Button color="light-blue" size="lg" onClick={() => window.history.back()}>Back</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default OccasionalFWRequest;
