import React from 'react';
import FDeleteMember from '../functions/FDeleteMember';
import { Link } from 'react-router-dom';
import { Typography, Button, Input } from '@material-tailwind/react';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';


function DeleteMember() {
  const { member, handleDelete } = FDeleteMember();

  if (!member) {
    return <p>Member not found</p>;
  }

  return (
    <>
    <AdminNavbar/>
    <div className="container mt-5">
      <Typography variant="h3" className="text-center">Delete Member</Typography>
      <form onSubmit={handleDelete} className="mt-4">
        <table className="table table-bordered">
          <tbody className='text-center'>
          <tr>
              <th>ID:</th>
              <td><Input type="text" value={member.id} disabled className="form-control" /></td>
            </tr>
            
            <tr>
              <th>Name:</th>
              <td><Input type="text" value={member.name} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Email:</th>
              <td><Input type="email" value={member.email} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Mobile No:</th>
              <td><Input type="text" value={member.mobileNo} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Address:</th>
              <td><Input type="text" value={member.address} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Username:</th>
              <td><Input  type="text"  value={member.username}  disabled className="form-control"/></td>
            </tr>
            <tr>
              <th>Password:</th>
              <td><Input type="password" value={member.password} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th>Security Question:</th>
              <td><Input type="text" value={member.securityQuestion} disabled className="form-control" /></td>
            </tr>
            <tr>
              <th><label className="font-bold">Answer:</label></th>
              <td><Input variant='standard' type="text" name="answer" value={member.answer} className="form-control" disabled /></td>
            </tr>
            <tr>
              <th><label className="font-bold">Volunteer Request:</label></th>
              <td><input type="text" value={member.BeVolunteer} disabled className="form-control" /></td>
            </tr>
           
           
            <tr>
              <td colSpan="2" className="text-center">
                <Button type="submit" color="green" size="lg">Delete</Button>
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
}

export default DeleteMember;
