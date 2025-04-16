import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import FUpdateBiogas from '../functions/FUpdateBiogas';
import { Button, Typography, Input } from '@material-tailwind/react';
import 'tailwindcss/tailwind.css'; 
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';
import {Alert} from '@material-tailwind/react';



function UpdateBiogas() {
  const location = useLocation();
  const navigate = useNavigate();
  const { biogas } = location.state;
  const { formData, handleChange, handleSubmit,errorMessage,showAlert } = FUpdateBiogas(biogas, navigate);

  return (
    <>
    <AdminNavbar/>
    <div className="container mt-5"> 
         {errorMessage && <Alert color="red">{errorMessage}</Alert>}
        <br />
        {showAlert && <Alert color="red">Please fill in all fields</Alert>}
     
      <Typography variant='h3' className="text-center mb-4">Update Biogas</Typography>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th><label className="font-bold">Biogas ID:</label></th>
              <th><Input variant='standard' type="text" name="biogasId" value={formData.biogasId} onChange={handleChange}  /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Biogas Name:</label></th>
              <th><Input variant='standard' type="text" name="biogasName" value={formData.biogasName} onChange={handleChange}  /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Email:</label></th>
              <th><Input variant='standard' type="email" name="biogasEmail" value={formData.biogasEmail} onChange={handleChange}  /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Mobile No:</label></th>
              <th><Input variant='standard' type="text" name="biogasMobileNo" value={formData.biogasMobileNo} onChange={handleChange}  /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Address:</label></th>
              <th><Input variant='standard' type="text" name="biogasAddress" value={formData.biogasAddress} onChange={handleChange}  /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Slurry Limit :</label></th>
              <th><Input variant='standard' type="text" name="biogasSlurryLimit" value={formData.biogasSlurryLimit} onChange={handleChange}  /></th>
            </tr>
            <tr>
              <th colSpan="2" className="text-center">
                <Button color="green" size="lg" type="submit">Confirm</Button>
                <Button color="light-blue" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default UpdateBiogas;
