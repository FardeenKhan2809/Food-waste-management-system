const Registration = require('../models/registrationSchema');
const RegularFWRequestModel=require('../models/RegularFWRequestModel');
const MemberModel=require('../models/memberSchema');
const FarmerModel=require('../models/slurryrequestModel');  // Import the existing schema
const nodemailer = require('nodemailer');
const crypto = require('crypto');

exports.loginUser = async (req, res) => {
  const formData=req.body;
  const { username, password, category } = formData;

 
  if (!category) {
    return res.json({ success: false, message: 'Select a category', focus: 'category' });
  }
  if (!username){
    return res.json({success:false,message:'Username is Required',focus:'username'})
  }
  if (!password){
    return res.json({success:false,message:'Password is Required',focus:'password'})
  }
  
  
  try {
 

 const user = await Registration.findOne({ username, password, category });

    if (user) {
      req.session.userId = user._id;
      const { password, ...clearedFormData } = formData;
      res.json({
        success: true,
        message: 'Login successful',

      });

    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials or category',
      });
     
 
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};


exports.getUserDetails = async (req, res) => {
  try {
      // Check if user is authenticated
      if (!req.session.userId) {
          throw new Error('Unauthorized');
      }

      // Retrieve the user from the database
      const user = await Registration.findById(req.session.userId);
      if (!user) {
          throw new Error('User not found');
      }

      // Destructure user details
      const { username, email, mobileNo, organisationName, name, address, category } = user;

      // Initialize response data object
      let responseData = { username, email, mobileNo, organisationName, name, address, category };

      // Retrieve additional data based on category
      if (category === 'Hotel' || category === 'Hostel') {
          // Retrieve data from RegularFWRequestModel if category is Hotel or Hostel
          const regularFWData = await RegularFWRequestModel.findOne({ email: email });
          if (regularFWData) {
              responseData = {
                  ...responseData,
                  date: regularFWData.date,
                  requesterName: regularFWData.requesterName,
                  approxQuantity: regularFWData.approxQuantity,
                  status: regularFWData.status,
                  requestId: regularFWData.requestId
              };
          }
      } else if (category === 'Member') {
          // Retrieve data from Member model if category is Member
          const memberData = await MemberModel.findOne({ email: email });
          if (memberData) {
              responseData = {
                  ...responseData,
                  dateOfBirth: memberData.dateOfBirth,
                  username: memberData.username,
                  password: memberData.password,
                  securityQuestion: memberData.securityQuestion,
                  answer: memberData.answer,
                  id: memberData.id,
                  BeVolunteer: memberData.BeVolunteer
              };
          }
      } else if (category === 'Farmer') {
          // Retrieve data from Farmer model if category is Farmer
          const farmerData = await FarmerModel.findOne({ email: email });
          if (farmerData) {
              responseData = {
                  ...responseData,
                  farmerName: farmerData.farmerName,
                  mobileNo: farmerData.mobileNo,
                  address: farmerData.address,
                  date: farmerData.date,
              };
          }
      }

      // Return the response data
      res.status(200).json(responseData);
  } catch (error) {
      res.status(401).json({ error: error.message });
  }
};
exports.logout = (req, res) => {
  try {
      req.session.destroy((err) => {
          if (err) {
              console.error('Error destroying session:', err);
              res.status(500).json({ error: 'Failed to logout' });
          } else {
              res.clearCookie('connect.sid'); // Clear the session cookie
              res.status(200).json({ message: 'Logout successful' });
          }
      });
  } catch (error) {
      console.error('Error during logout:', error);
      res.status(500).json({ error: 'Failed to logout' });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
      const userId = req.session.userId; // Assuming you have authentication middleware to get user ID from the request
      const updatedData = req.body; // The updated data from the request body

      // Find the user by ID and update their profile
      const user = await Registration.findByIdAndUpdate(userId, updatedData, { new: true });

      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      // Return the updated user profile as a JSON response
      res.json(user);
  } catch (error) {
      console.error('Failed to update profile:', error);
      res.status(500).json({ error: 'Failed to update profile' });
  }
};

// controllers/authController.js


