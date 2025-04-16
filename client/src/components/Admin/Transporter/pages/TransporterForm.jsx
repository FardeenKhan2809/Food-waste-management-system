import React from 'react';
import { useNavigate } from 'react-router-dom';
import FTransporterForm from '../functions/FTransporterForm';
import { Button, Typography, Input } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';


const TransporterForm = () => {
  const { formData, errors, handleInputChange, handleSubmit, transporterId } = FTransporterForm();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/adminviewtransporter');
  };

  return (
    <><AdminNavbar/>
    <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
      <Typography variant='h3' className="text-center mb-4">Become our transporter..</Typography>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                <label htmlFor="vehicleNo" className="font-bold form-label">Vehicle No:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  id="vehicleNo"
                  name="vehicleNo"
                  placeholder="Enter Vehicle No"
                  value={formData.vehicleNo}
                  onChange={handleInputChange}
                />
                              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="vehicleType" className="font-bold form-label">Vehicle Type:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  id="vehicleType"
                  name="vehicleType"
                  placeholder="Enter Vehicle Type"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                />
                
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="driverName" className="font-bold form-label">Driver Name:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  id="driverName"
                  name="driverName"
                  placeholder="Enter Driver Name"
                  value={formData.driverName}
                  onChange={handleInputChange}
                />
                
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="licenseNo" className="font-bold form-label">License No:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  id="licenseNo"
                  name="licenseNo"
                  placeholder="Enter License No"
                  value={formData.licenseNo}
                  onChange={handleInputChange}
                />
               
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="mobileNo" className="font-bold form-label">Mobile No:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  id="mobileNo"
                  name="mobileNo"
                  placeholder="Enter Mobile No"
                  value={formData.mobileNo}
                  onChange={handleInputChange}
                />
              
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email" className="font-bold form-label">Email:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="address" className="font-bold form-label">Address:</label>
              </td>
              <td>
                <textarea
                className="border border-gray-300 p-2 rounded-md w-full"
                  id="address"
                  name="address"
                  placeholder="Enter Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={4}
                />
                
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="rentRate" className="font-bold form-label">Rent Rate:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  id="rentRate"
                  name="rentRate"
                  placeholder="Enter Rent Rate"
                  value={formData.rentRate}
                  onChange={handleInputChange}
                />
               
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center mt-4">
          <Button type="submit" color="green" size='lg' className="mr-2" onClick={handleSubmit}>Create Transporter</Button>
          <Button color="light-blue" size='lg' onClick={handleBack}>Back</Button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default TransporterForm;
