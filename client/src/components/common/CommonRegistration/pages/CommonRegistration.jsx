import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import FCommonRegistrationForm from '../functions/FCommonRegistration';
import { Button, Input, Alert, Typography } from '@material-tailwind/react';
import Footer from '../../../Footer/Footer';


const CommonRegistrationForm = () => {
  const { formData, handleChange, handleSubmit, errorMessage, showAlert, handleCloseAlert,regid } = FCommonRegistrationForm();
  


  return (
    <>
      <div className='mt-2'>
    
            
      <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
        <Typography variant='h3' className="text-center mb-4">Register..</Typography>
        <form onSubmit={handleSubmit}>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td className="form-label font-bold">Category: </td>
                <td>
                  <select 
                  id="category" 
                  name="category" 
                  value={formData.category} 
                  onChange={handleChange} 
                  className='form-select' >

                    <option value="">Select Category</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Hostel">Hostel</option>
                    <option value="Farmer">Farmer</option>
                    <option value="Member">Member</option>
                    <option value="Others">Others</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Organisation Name:</td>
                <td>
                  <Input
                  variant='standard' 
                  type="text" 
                  id="organisationName" 
                  name="organisationName" 
                  value={formData.organisationName} 
                  onChange={handleChange} 
                  placeholder="Organisation Name" />
                   <Typography
        variant="small"
        color="gray"
        className="mt-2 flex items-center gap-1 font-normal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="-mt-px h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
       If selected category is Farmer,Member or Others then type organisation name 'None'.
      </Typography>
                </td>
                
              </tr>
              <tr>
                <td  className="form-label font-bold"> Name: </td>
                <td>
                  <Input 
                  variant='standard' 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Name" />
                </td>
              </tr>
              <tr>
                <td  className="form-label font-bold">Address: </td>
                <td>
                  <textarea
                   rows={4}
                   className="border border-gray-300 p-2 rounded-md w-full" 
                   id="address" 
                   name="address"
                  value={formData.address} 
                  onChange={handleChange} 
                  placeholder="Address" />
                </td>
              </tr>
              <tr>
                <td  className="form-label font-bold">Date of Birth: </td>
                <td>
                  <Input 
                  variant='standard' 
                  type="date" 
                  id="dateOfBirth" 
                  name="dateOfBirth"
                   value={formData.dateOfBirth}
                    onChange={handleChange} 
                    placeholder="Date of Birth" />
                </td>
              </tr>
              <tr>
                <td  className="form-label font-bold">Email: </td>
                <td>
                  <Input 
                  variant='standard' 
                  type="email" 
                  id="email" 
                  name="email"
                   value={formData.email} 
                   onChange={handleChange} 
                   placeholder="Email" />
                </td>
              </tr>
              <tr>
                <td  className="form-label font-bold">Mobile No: </td>
                <td>
                  <Input 
                  variant='standard' 
                  type="tel" 
                  id="mobileNo" 
                  name="mobileNo" 
                  value={formData.mobileNo} 
                  onChange={handleChange} 
                  placeholder="Mobile No" />
                </td>
              </tr>
              <tr>
                <td  className="form-label font-bold">Username: </td>
                <td>
                  <Input 
                  variant='standard'
                   type="text" 
                   id="username" 
                   name="username" 
                   value={formData.username}
                    onChange={handleChange} 
                    placeholder="Username" />
                </td>
              </tr>
              <tr>
                <td  className="form-label font-bold">Password: </td>
                <td>
                  <Input 
                  variant='standard' 
                  type="password" 
                  id="password" 
                  name="password" 
                  value={formData.password} 
                  onChange={handleChange} 
                  placeholder="Password" />
                </td>
              </tr>
              <tr>
                <td  className="form-label font-bold">Security Question: </td>
                <td>
                  <select 
                  name="securityQuestion" 
                  value={formData.securityQuestion}
                   onChange={handleChange} 
                   className="form-select">

                    <option value="">Select Security Question</option>
                    <option value="favFood">Favorite Food</option>
                    <option value="favHobby">Favorite Hobby</option>
                    <option value="favSport">Favorite Sport</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td  className="form-label font-bold">Answer: </td>
                <td>
                  <Input 
                  variant='standard' 
                  type="text" name="answer" 
                  value={formData.answer}
                   onChange={handleChange} 
                   placeholder="Answer" />
                </td>
              </tr>
            </tbody>
          </table>
          <Button type="submit" color='green' size='lg' className='me-2'>Submit</Button>
          <Button color="light-blue" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
        </form>
        <Typography color="blue-gray" className="mt-4">Already have an account ? <a href='/login' className="font-medium text-gray-600">Sign-In</a></Typography>
                    <br></br>
       
      </div>
      </div>
      
      <Footer />
    </>
  );
};

export default CommonRegistrationForm;


        
        