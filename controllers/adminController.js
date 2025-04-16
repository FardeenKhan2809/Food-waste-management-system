const Admin = require('../models/adminSchema');
const axios = require('axios');


exports.registerUser = async (req, res) => {
  const formData = req.body;
  const { username, email, mobileNo } = req.body; // Extract username, email, and mobileNo from the form data

  // Additional validation checks
  const { dateOfBirth, name, password ,address,securityQuestion,answer} = formData;
  const currentDate = new Date().toISOString().split('T')[0];
  const mobileNoRegex = /^[6-9]\d{9}$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  
  if (!name) {
    return res.json({ success: false, message: 'Name is required', focus: 'name' });
  }
  if(!address){
    return res.json({ success: false, message: 'Address is required', focus: 'address' });
  }
  if(!securityQuestion){ 
    return res.json({ success: false, message: 'Security Question is required', focus: 'securityQuestion' }); 
  }

  if(!answer){
    return res.json({ success: false, message: 'Answer is required', focus: 'answer' });
  }
  if(!dateOfBirth){
    return res.json({success:false,message:'date of birth is required', focus:'dateOfBirth'});
  }
  if(!username){
    return res.json({success:false,message:'Username is required',focus:'username'});
  }
  if(!mobileNo) {
    return res.json({success:false,message:'Mobile number is required',focus:'mobileNo'});
  }

  // Check if the date of birth is after the current date
  if (new Date(dateOfBirth) > new Date(currentDate)) {
    return res.json({ success: false, message: 'Date of Birth cannot be after the current date', focus: 'dateOfBirth' });
  }

  // Check if the email is in a valid format
  if (!email.includes('@')) {
    return res.json({ success: false, message: 'Invalid email format', focus: 'email' });
  }

  // Check if the mobile number matches the regex pattern
  if (!mobileNo.match(mobileNoRegex)) {
    return res.json({ success: false, message: 'Invalid mobile number format', focus: 'mobileNo' });
  }

  // Check if the organisation name contains digits or special characters
  if (name.match(/[0-9!@#$%^&*]/)) {
    return res.json({ success: false, message: 'Admin Name should not contain any digits or special characters', focus: 'name' });
  }

  // Check if the password matches the regex pattern
  if (!password.match(passwordRegex)) {
    return res.json({ success: false, message: 'Password should contain at least one digit, one special character, and have a minimum length of 8 characters', focus: 'password' });
  }

  try {
    // Check if the username, email, or mobile number already exists in the database
    const user = await Admin.findOne({ $or: [{ username: formData.username }, { email: formData.email }, { mobileNo: formData.mobileNo }] });

        if (user) {
            if (user.username === formData.username) {
                return res.json({ success: false, message: 'Username already occupied', focus: 'username' });
            } else if (user.email === formData.email) {
                return res.json({ success: false, message: 'Email already registered', focus: 'email' });
            } else {
                return res.json({ success: false, message: 'Mobile number already registered', focus: 'mobileNo' });
            } 
          }
           else
           {
    const newAdmin = new Admin(formData);
    await newAdmin.save();
     // Clear the form data after successful registration
 const { password, ...clearedFormData } = formData;
 // Send success response with message and registration ID
 return res.json({ success: true, message: 'Admin done successfully', aid: newAdmin._id })     
}
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    console.error('Error fetching Admins:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Update Admin
exports.updateAdmin = async (req, res) => {
  const { id } = req.params;
  const formData = req.body;
  const { username, email, mobileNo } = formData; // Extract username, email, and mobileNo from the form data

  // Additional validation checks
  const { dateOfBirth, name, password ,address,securityQuestion,answer} = formData;
  const currentDate = new Date().toISOString().split('T')[0];
  const mobileNoRegex = /^[6-9]\d{9}$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  
  if (!name) {
    return res.json({ success: false, message: 'Name is required', focus: 'name' });
  }
  if(!address){
    return res.json({ success: false, message: 'Address is required', focus: 'address' });
  }
  if(!securityQuestion){ 
    return res.json({ success: false, message: 'Security Question is required', focus: 'securityQuestion' }); 
  }

  if(!answer){
    return res.json({ success: false, message: 'Answer is required', focus: 'answer' });
  }
  if(!dateOfBirth){
    return res.json({success:false,message:'date of birth is required', focus:'dateOfBirth'});
  }
  if(!username){
    return res.json({success:false,message:'Username is required',focus:'username'});
  }
  if(!mobileNo) {
    return res.json({success:false,message:'Mobile number is required',focus:'mobileNo'});
  }

  // Check if the date of birth is after the current date
  if (new Date(dateOfBirth) > new Date(currentDate)) {
    return res.json({ success: false, message: 'Date of Birth cannot be after the current date', focus: 'dateOfBirth' });
  }

  // Check if the email is in a valid format
  if (!email.includes('@')) {
    return res.json({ success: false, message: 'Invalid email format', focus: 'email' });
  }

  if (typeof mobileNo === 'string' && !mobileNo.match(mobileNoRegex)) {
    return res.json({ success: false, message: 'Invalid mobile number format', focus: 'mobileNo' });
}

  // Check if the organisation name contains digits or special characters
  if (name.match(/[0-9!@#$%^&*]/)) {
    return res.json({ success: false, message: 'Admin Name should not contain any digits or special characters', focus: 'name' });
  }

  // Check if the password matches the regex pattern
  if (!password.match(passwordRegex)) {
    return res.json({ success: false, message: 'Password should contain at least one digit, one special character, and have a minimum length of 8 characters', focus: 'password' });
  }

  try {
   
       
          
      const admin = await Admin.findByIdAndUpdate(id, formData, { new: true });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    res.status(200).json(admin);
  
 }
  catch (error) {
    console.error('Error updating Admin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete Admin
exports.deleteAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const admin = await Admin.findByIdAndDelete(id);

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    console.error('Error deleting Admin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
