// controllers/donationController.js

const Donation = require('../models/donationModel');


// Controller to create a new donation
exports.createDonation = async (req, res) => {
  const donationData = req.body;
 
  // Additional validation checks
  const { donationType,donationAmount,donorEmail,donorMobileNo,donorName,cardNumber,expiry,cvv,description} = donationData;
  const currentDate = new Date().toISOString().split('T')[0];
  const mobileNoRegex = /^[6-9]\d{9}$/;
  
  
  if (!donorName) {
    return res.json({ success: false, message: 'Name is required', focus: 'donorName' });
  }
  if(!donationType){
    return res.json({ success: false, message: 'donationType is required', focus: 'donationType' });
  }
  if(!donationAmount){ 
    return res.json({ success: false, message: 'Amount is required', focus: 'donationAmount' }); 
  }
  if(!description){ 
    return res.json({ success: false, message: 'Description is required', focus: 'description' }); 
  }


  if(!cardNumber){
    return res.json({ success: false, message: 'Card-Number is Mandatory', focus: 'cardNumber' });
  }
  if(!expiry){
    return res.json({success:false,message:'Expiry Date is required',focus:'expiry'});
  }
  if(!donorMobileNo) {
    return res.json({success:false,message:'Mobile number is Mandatory',focus:'donorMobileNo'});
  }
  if(!donorEmail) {
    return res.json({success:false, message:'Donor Email is Mandatory !',focus:'donorEmail'});
  }
  if(!cvv) {
    return res.json({success:false, message:'CVV is Mandatory !',focus:'cvv'});
  }

  
  // Check if the email is in a valid format
  if (!donorEmail.includes('@')) {
    return res.json({ success: false, message: 'Invalid email format', focus: 'donorEmail' });
  }

  // Check if the mobile number matches the regex pattern
  if (!donorMobileNo.match(mobileNoRegex)) {
    return res.json({ success: false, message: 'Invalid mobile number format', focus: 'donorMobileNo' });
  }

  // Check if the organisation name contains digits or special characters
  if (donorName.match(/[0-9!@#$%^&*]/)) {
    return res.json({ success: false, message: 'Donor Name should not contain any digits or special characters', focus: 'donorName' });
  }

 
  try {
     const newDonation = new Donation(donationData);
    await newDonation.save();
    const { donorEmail, ...clearedFormData } = donationData;
    // Send success response with message and registration ID
    return res.json({ success: true, message: 'Donation Done successfully', donationId: newDonation._id })     
   
  } catch (error) {
    console.error('Error creating donation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (error) {
    console.error('Error fetching Donations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Update registration
exports.updateDonation = async (req, res) => {
  const { id } = req.params;

  try {
    const donation = await Donation.findByIdAndUpdate(id, req.body, { new: true });

    if (!donation) {
      return res.status(404).json({ message: 'donation not found' });
    }

    res.status(200).json(donation);
  } catch (error) {
    console.error('Error updating donation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Delete registration
exports.deleteDonation = async (req, res) => {
  const { id } = req.params;

  try {
    const donation = await Donation.findByIdAndDelete(id);

    if (!donation) {
      return res.status(404).json({ message: 'donation not found' });
    }

    res.status(200).json({ message: 'donation deleted successfully' });
  } catch (error) {
    console.error('Error deleting donation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

