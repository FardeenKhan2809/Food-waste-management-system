import React from 'react';
import { useState, useEffect } from 'react';
import { Input, Button, Typography } from '@material-tailwind/react';
import UserFMember from '../functions/UserFMember';
import UserNavbar from '../../UserNavbar';
import Footer from '../../../Footer/Footer';

const UserMember = () => {
  const { formData, errors, handleInputChange, handleSubmit } = UserFMember();
  const [isVolunteerEnabled, setIsVolunteerEnabled] = useState(false);

  useEffect(() => {
    const calculateAge = (dateString) => {
      const today = new Date();
      const birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age;
    };

    if (formData.dateOfBirth) {
      const age = calculateAge(formData.dateOfBirth);
      setIsVolunteerEnabled(age >= 18);
    }
  }, [formData.dateOfBirth]);

  return (
    <>
      <UserNavbar />
      <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
      <Typography variant='h3' className="text-center mb-4">Register Member</Typography>
      <form onSubmit={handleSubmit} className="mt-4">
        <table className="table table-bordered">
          <tbody>
            
            <tr>
              <td>
                <Typography className="form-label font-bold">Name:</Typography>
              </td>
              <td>
                <Input variant="standard" type="text" name="name" value={formData.name} onChange={handleInputChange} />
                
              </td>
            </tr>
            <tr>
              <td>
                <Typography className="form-label font-bold">Date of Birth:</Typography>
              </td>
              <td>
                <Input variant="standard" type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} />
                
              </td>
            </tr>
            <tr>
              <td>
                <Typography className="form-label font-bold">Address:</Typography>
              </td>
              <td>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={4} // Set the number of visible rows
                cols={50} // Set the number of visible columns
                placeholder="Address"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
               
              </td>
            </tr>
            <tr>
              <td>
                <Typography className="form-label font-bold">Email:</Typography>
              </td>
              <td>
                <Input variant="standard" type="email" name="email" value={formData.email} onChange={handleInputChange} />
               
              </td>
            </tr>
            <tr>
              <td>
                <Typography className="form-label font-bold">Mobile No:</Typography>
              </td>
              <td>
                <Input variant="standard" type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} />
                
              </td>
            </tr>
            <tr>
              <td>
                <Typography className="form-label font-bold">Username:</Typography>
              </td>
              <td>
                <Input variant="standard" type="text" name="username" value={formData.username} onChange={handleInputChange} />
                
              </td>
            </tr>
            <tr>
              <td>
                <Typography className="form-label font-bold">Password:</Typography>
              </td>
              <td>
                <Input variant="standard" type="password" name="password" value={formData.password} onChange={handleInputChange} />
               
              </td>
            </tr>
            <tr>
              <td>
                <Typography className="form-label font-bold">Security Question:</Typography>
              </td>
              <td>
                <select name="securityQuestion" value={formData.securityQuestion} onChange={handleInputChange} className="form-select" >
                  <option value="">Select Security Question</option>
                  <option value="favFood">Favorite Food</option>
                  <option value="favHobby">Favorite Hobby</option>
                  <option value="favSport">Favorite Sport</option>
                </select>
                
              </td>
            </tr>
            <tr>
              <td>
                <Typography className="form-label font-bold">Answer:</Typography>
              </td>
              <td>
                <Input variant="standard" type="text" name="answer" value={formData.answer} onChange={handleInputChange} />
                
              </td>
            </tr>
            <tr>
              <td>
            <Typography className="form-label font-bold">Serve As Volunteer:</Typography>
            </td>
            <td>
            <select name="BeVolunteer" value={formData.BeVolunteer} onChange={handleInputChange} className="form-select" disabled={!isVolunteerEnabled}>
                  <option value="">Prefer Yes Or No</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                       </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center mt-4">
          <Button type="submit" color="green"  size="lg" className="me-2">Register Member</Button>
          <Button color="light-blue" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
        </div>
      </form>
    </div>      
    <Footer/>
    </>
  );
};

export default UserMember;
