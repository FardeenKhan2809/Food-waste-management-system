import React from 'react';
import FDeleteBiogas from '../functions/FDeleteBiogas';
import { Link } from 'react-router-dom';
import { Button, Typography, Input } from '@material-tailwind/react';
import 'tailwindcss/tailwind.css';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';


function DeleteBiogas() {
  const { biogas, handleDelete } = FDeleteBiogas();

  if (!biogas) {
    return <p>Biogas not found or missing information.</p>;
  }

  return (
    <>
    <AdminNavbar/>
    <div className="container mt-5"> 
      <Typography variant='h3' className="text-center">Delete biogas</Typography>
      <form onSubmit={handleDelete} className='mt-4'>
        <table className="table table-bordered">
          <tbody className='text-center'>
            <tr>
              <th><label className="font-bold">Biogas ID :</label></th>
              <th><Input type="text" value={biogas.biogasId} disabled /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Name:</label></th>
              <th><Input type="text" value={biogas.biogasName} disabled /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Email:</label></th>
              <th><Input type="text" value={biogas.biogasEmail} disabled /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Mobile No:</label></th>
              <th><Input type="text" value={biogas.biogasMobileNo} disabled /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Address:</label></th>
              <th><Input  type="text" value={biogas.biogasAddress} disabled /></th>
            </tr>
            <tr>
              <th><label className="font-bold">Slurry Limit :</label></th>
              <th><Input type="text" value={biogas.biogasSlurryLimit} disabled /></th>
            </tr>
            <tr>
              <th colSpan="2" className="text-center">
                <Button color="green" size="lg" type="submit">Delete</Button>
                <Button color="light-blue" size="lg" className="ms-4" onClick={() => window.history.back()}>Back</Button>
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

export default DeleteBiogas;
