import React from 'react';
import UserFFarmerForm from '../functions/UserFFarmerForm';
import { Typography, Button, Input } from '@material-tailwind/react';
import Footer from '../../../Footer/Footer';

const UserFarmerForm = () => {
  const { formData, errors, handleInputChange, handleSubmit } = UserFFarmerForm();

  return (
    <>
      <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
        <Typography variant='h3' className="text-center mb-4">Register..</Typography>
        <form onSubmit={handleSubmit} className="container mt-4">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="farmerId" className="form-label font-bold">Farmer ID:</label>
                </td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    id="farmerId"
                    name="farmerId"
                    value={formData.farmerId}
                    onChange={handleInputChange}
                    placeholder="Enter Farmer ID"
                  />
                  {errors.farmerId && <span className="text-danger">{errors.farmerId}</span>}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="farmerName" className="form-label font-bold">Farmer Name:</label>
                </td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    id="farmerName"
                    name="farmerName"
                    value={formData.farmerName}
                    onChange={handleInputChange}
                    placeholder="Enter Farmer Name"
                  />
                  {errors.farmerName && <span className="text-danger">{errors.farmerName}</span>}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="farmerMobileNo" className="form-label font-bold">Farmer Mobile No:</label>
                </td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    id="farmerMobileNo"
                    name="farmerMobileNo"
                    value={formData.farmerMobileNo}
                    onChange={handleInputChange}
                    placeholder="Enter Farmer Mobile No"
                  />
                  {errors.farmerMobileNo && <span className="text-danger">{errors.farmerMobileNo}</span>}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="farmerEmail" className="form-label font-bold">Farmer Email:</label>
                </td>
                <td>
                  <Input
                    variant='standard'
                    type="email"
                    id="farmerEmail"
                    name="farmerEmail"
                    value={formData.farmerEmail}
                    onChange={handleInputChange}
                    placeholder="Enter Farmer Email"
                  />
                  {errors.farmerEmail && <span className="text-danger">{errors.farmerEmail}</span>}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="farmerAddress" className="form-label font-bold">Farmer Address:</label>
                </td>
                <td>
                  <textarea
                    id="farmerAddress"
                    name="farmerAddress"
                    value={formData.farmerAddress}
                    onChange={handleInputChange}
                    rows={4}
                    className="border border-gray-300 p-2 rounded-md w-full"
                    placeholder="Enter Farmer Address"
                  />
                  {errors.farmerAddress && <span className="text-danger">{errors.farmerAddress}</span>}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="farmerUsername" className="form-label font-bold">Farmer Username:</label>
                </td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    id="farmerUsername"
                    name="farmerUsername"
                    value={formData.farmerUsername}
                    onChange={handleInputChange}
                    placeholder="Enter Farmer Username"
                  />
                  {errors.farmerUsername && <span className="text-danger">{errors.farmerUsername}</span>}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="farmerPassword" className="form-label font-bold">Farmer Password:</label>
                </td>
                <td>
                  <Input
                    variant='standard'
                    type="password"
                    id="farmerPassword"
                    name="farmerPassword"
                    value={formData.farmerPassword}
                    onChange={handleInputChange}
                    placeholder="Enter Farmer Password"
                  />
                  {errors.farmerPassword && <span className="text-danger">{errors.farmerPassword}</span>}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="farmerSecurityQuestion" className="form-label font-bold">Farmer Security Question:</label>
                </td>
                <td>
                  <select
                    className="form-select"
                    id="farmerSecurityQuestion"
                    name="farmerSecurityQuestion"
                    value={formData.farmerSecurityQuestion}
                    onChange={handleInputChange}
                    placeholder="Select Security Question"
                  >
                    <option value="">Select Security Question</option>
                    <option value="favFood">Favorite Food</option>
                    <option value="favHobby">Favorite Hobby</option>
                    <option value="favSport">Favorite Sport</option>
                  </select>
                  {errors.farmerSecurityQuestion && <span className="text-danger">{errors.farmerSecurityQuestion}</span>}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="farmerAnswer" className="form-label font-bold">Farmer Answer:</label>
                </td>
                <td>
                  <Input
                    variant='standard'
                    type="text"
                    id="farmerAnswer"
                    name="farmerAnswer"
                    value={formData.farmerAnswer}
                    onChange={handleInputChange}
                    placeholder="Enter Farmer Answer"
                  />
                  {errors.farmerAnswer && <span className="text-danger">{errors.farmerAnswer}</span>}
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="text-center">
                  <Button type="submit" color='green' size='lg' className="me-2" onClick={handleSubmit}>Confirm</Button>
                  <Button color="light-blue" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
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

export default UserFarmerForm;
