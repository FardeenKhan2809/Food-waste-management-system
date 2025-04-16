import React from 'react';
import { Input, Button, Typography } from '@material-tailwind/react';
import FBioGasForm from '../functions/FBioGasForm';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';
import {Alert} from '@material-tailwind/react';

const BioGasForm = () => {
  const { formData,  handleInputChange, handleSubmit,biogasId} = FBioGasForm();
  
  return (
    <>
      <AdminNavbar />
       <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
        <Typography variant='h3' className="text-center mb-4">Add Biogas Plant</Typography>
        <form onSubmit={handleSubmit}>
          <table className="table table-bordered">
            <tbody>
             
              <tr>
                <td className="form-label font-bold">Biogas Name:</td>
                <td>
                  <Input
                    type="text"
                    name="biogasName"
                    id="biogasName"
                    value={formData.biogasName}
                    onChange={handleInputChange}
                    size="md"
                    placeholder="Biogas Name"
                    variant="standard"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Biogas Address:</td>
                <td>
                  <textarea
                    id='biogasAddress'
                    name="biogasAddress"
                    value={formData.biogasAddress}
                    onChange={handleInputChange}
                    size="md"
                    placeholder="Biogas Address"
                    className="border border-gray-300 p-2 rounded-md w-full"
                    rows={4}
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Biogas Mobile No:</td>
                <td>
                  <Input
                    type="text"
                    name="biogasMobileNo"
                    id="biogasMobileNo"
                    value={formData.biogasMobileNo}
                    onChange={handleInputChange}
                    size="md"
                    placeholder="Biogas Mobile No"
                    variant="standard"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Biogas Email:</td>
                <td>
                  <Input
                    type="email"
                    name="biogasEmail"
                    id="biogasEmail"
                    value={formData.biogasEmail}
                    onChange={handleInputChange}
                    size="md"
                    placeholder="Biogas Email"
                    variant="standard"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Biogas Slurry Limit:</td>
                <td>
                  <Input
                    type="text"
                    name="biogasSlurryLimit"
                    id="biogasSlurryLimit"
                    value={formData.biogasSlurryLimit}
                    onChange={handleInputChange}
                    size="md"
                    placeholder="Biogas Slurry Limit"
                    variant="standard"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center mt-4">
            <Button type="submit" color="green" size="md" className="me-2">
              Create Biogas
            </Button>
            <Button color="light-blue" size="lg" onClick={() => window.history.back()}>Back</Button>
          </div>
        </form>
      </div>
    
      <Footer />
    </>
  );
};

export default BioGasForm;
