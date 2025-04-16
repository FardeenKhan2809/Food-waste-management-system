import React,{useState} from 'react';
import UserFVolunteer from '../functions/UserFVolunteer';
import { Button, Input, Typography } from '@material-tailwind/react';
import Footer from '../../../Footer/Footer';
import  Axios  from 'axios';


const UserVolunteer = () => {
  const { formData, handleInputChange,setFormData } = UserFVolunteer();
  const [volunteerId, setvolunteerId] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

   
      try {
        const response = await Axios.post('http://localhost:5000/api/volunteer-table', formData);
        if (response.data.success) {
       
        alert(response.data.message);
        setvolunteerId(response.data.volunteerId);
        setFormData({
          id:'',
          volunteerName: '',
          dateOfBirth: '', // New field for Date of Birth
          volunteeraddress: '',
          email: '',
         volunteermobileNo: '',
          username: '',
          password: '',
          securityQuestion: '',
          answer: '',
      });
  
      // Redirect to login page
      window.location.href = '/user';
  } else {
      // If registration failed and there's a field to focus on
      if (response.data.focus) {
          const field = document.getElementById(response.data.focus);
          if (field) {
              field.focus();
          }
      }
      
      // Display error message
      window.alert(response.data.message);
  } 
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Volunteer Registration failed. Please try again.');
      }
    }
  
  return (
    <>
    <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
      <Typography variant='h3' className="text-center mb-4">Register Volunteer</Typography>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="volunteerid" className="font-bold form-label">VolunteerId:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="text" name="volunteerId" value={volunteerId} readOnly onChange={handleInputChange} placeholder="Enter Volunteer ID" />
                 
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="memberid" className="font-bold form-label">Member ID:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="text" name="id" id="id" value={formData.id} onChange={handleInputChange} placeholder="Enter Member ID" />
                    </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="name" className="font-bold form-label">Volunteer Name:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="text" name="volunteerName" id="volunteerName" value={formData.volunteerName} onChange={handleInputChange} placeholder="Enter Volunteer Name" />
                 
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="dateOfBirth" className="font-bold form-label">Date of Birth:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="text" name="dateOfBirth" id="dateofBirth" value={formData.dateOfBirth} onChange={handleInputChange} placeholder="Select Date of Birth" />
                  
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="address" className="font-bold form-label">Address:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <textarea 
                  id='volunteeraddress'
                  rows={4} 
                  className="border border-gray-300 p-2 rounded-md w-full" 
                  name="volunteeraddress" 
                  value={formData.volunteeraddress} 
                  onChange={handleInputChange} 
                  placeholder="Enter Address" />
                  
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="Email" className="font-bold form-label">Email:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="text" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="Enter Email" />
                 
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="mobileNo" className="font-bold form-label">Mobile no:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="text" name="volunteermobileNo" id="volunteermobileNo" value={formData.volunteermobileNo} onChange={handleInputChange} placeholder="Enter Mobile No" />
                 
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="username" className="font-bold form-label">Username:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="text" name="username" id="username" value={formData.username} onChange={handleInputChange} placeholder="Enter Username" />
                 
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="password" className="font-bold form-label">Password:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} placeholder="Enter Password" />
                 
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="securityQuestion" className="font-bold form-label">Security Question:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <select name="securityQuestion" value={formData.securityQuestion} id="securityQuestion" onChange={handleInputChange} className="form-select">
                    <option value="">Select Security Question</option>
                    <option value="favFood">Favorite Food</option>
                    <option value="favHobby">Favorite Hobby</option>
                    <option value="favSport">Favorite Sport</option>
                  </select>
                  
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="mb-3">
                  <label htmlFor="answer" className="font-bold form-label">Answer:</label>
                </div>
              </td>
              <td>
                <div className="mb-3">
                  <Input variant='standard' type="text" name="answer" id="answer" value={formData.answer} onChange={handleInputChange} placeholder="Enter Answer" />
                  
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center mt-4">
          <Button type="submit" color="green" size="lg" className="me-2">Register Volunteer</Button>
          <Button color="light-blue" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default UserVolunteer;
