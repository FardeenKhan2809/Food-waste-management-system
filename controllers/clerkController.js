const Clerk = require('../models/clerkSchema');
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
    return res.json({ success: false, message: 'Clerk Name should not contain any digits or special characters', focus: 'name' });
  }

  // Check if the password matches the regex pattern
  if (!password.match(passwordRegex)) {
    return res.json({ success: false, message: 'Password should contain at least one digit, one special character, and have a minimum length of 8 characters', focus: 'password' });
  }

  try {
    // Check if the username, email, or mobile number already exists in the database
    const user = await Clerk.findOne({ $or: [{ username: formData.username }, { email: formData.email }, { mobileNo: formData.mobileNo }] });

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
  
    const newClerk = new Clerk(formData);
    await newClerk.save();
    const { password, ...clearedFormData } = formData;
    // Send success response with message and registration ID
    return res.json({ success: true, message: 'Clerk done successfully', cid: newClerk._id })     
   }
  }
   catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getClerks = async (req, res) => {
  try {
    const clerks = await Clerk.find();
    res.json(clerks);
  } catch (error) {
    console.error('Error fetching Clerks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Update Clerk
exports.updateClerk = async (req, res) => {
  const { id } = req.params;

  try {
    const clerk = await Clerk.findByIdAndUpdate(id, req.body, { new: true });

    if (!clerk) {
      return res.status(404).json({ message: 'Clerk not found' });
    }

    res.status(200).json(Clerk);
  } catch (error) {
    console.error('Error updating Clerk:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete Clerk
exports.deleteClerk = async (req, res) => {
  const { id } = req.params;

  try {
    const clerk = await Clerk.findByIdAndDelete(id);

    if (!clerk) {
      return res.status(404).json({ message: 'Clerk not found' });
    }

    res.status(200).json({ message: 'Clerk deleted successfully' });
  } catch (error) {
    console.error('Error deleting Clerk:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
