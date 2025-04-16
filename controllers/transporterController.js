// controllers/transporterController.js

const Transporter=require('../models/transporterSchema');

// Controller to create a new transporter
exports.createTransporter = async (req, res) => {
  const transporterData = req.body;

  const {vehicleNo,vehicleType,driverName,licenseNo,mobileNo,email,rentRate}=transporterData;
  const mobileNoRegex = /^[6-9]\d{9}$/;
  // Regular expression for Gujarat transporter vehicle numbers (format: GJXX-XXXX)
const vehicleNoRegex = /^GJ\d{2}-\d{4}$/;
const LicenseRegex = /^[A-Z]{2}\d{14}$/;




  if(!driverName){
    return res.json({success:false,message:'Driver Name is Required',focus:'driverName'});
  }

  if(!vehicleType){
    return res.json({success:false,message:'Vehicle Type is Required',focus:'vehicleType'});
  }
  
  if(!vehicleNo){
    return res.json({success:false,message:'Vehicle No is Required',focus:'vehicleNo'});
  }
   // Check if the mobile number matches the regex pattern
   if (!vehicleNo.match(vehicleNoRegex)) {
    return res.json({ success: false, message: 'Vehicle should be of gujarat state(GJ... format)', focus: 'vehicleNo' });
  }

  
  if(!licenseNo){
    return res.json({success:false,message:'Lisence No is Mandatory',focus:'licenseNo'});
  }

  if (!licenseNo.match(LicenseRegex)) {
    return res.json({ success: false, message: 'Lisence No is not valid', focus: 'licenseNo' });
  }
  
  if(!mobileNo){
    return res.json({success:false,message:'Mobile No is Required',focus:'mobileNo'});
  }
  
  if(!email){
    return res.json({success:false,message:'Email is Required',focus:'email'});
  }
  
  if(!rentRate){
    return res.json({success:false,message:'Rent-Rate is Required',focus:'rentRate'});
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
  if (driverName.match(/[0-9!@#$%^&*]/)) {
    return res.json({ success: false, message: 'Driver Name should not contain any digits or special characters', focus: 'driverName' });
  }

  


  try {
    const newTransporter = new Transporter(transporterData);
    await newTransporter.save();

    // Clear the form data after successful registration
 const { driverName, ...clearedFormData } = transporterData;
 // Send success response with message and registration ID
 return res.json({ success: true, message: 'Transporter Registered successfully', transporterId: newTransporter._id })     
    
 
  } catch (error) {
    console.error('Error creating transporter:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getTransporter = async (req, res) => {
  try {
    const transporter = await Transporter.find();
    res.json(transporter);
  } catch (error) {
    console.error('Error fetching Transporter:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Update registration
exports.updateTransporter = async (req, res) => {
  const { id } = req.params;

  try {
    const transporter = await Transporter.findByIdAndUpdate(id, req.body, { new: true });

    if (!transporter) {
      return res.status(404).json({ message: 'Transporter not found' });
    }

    res.status(200).json(transporter);
  } catch (error) {
    console.error('Error updating Transporter:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Delete registration
exports.deleteTransporter = async (req, res) => {
  const { id } = req.params;

  try {
    const transporter = await Transporter.findByIdAndDelete(id);

    if (!transporter) {
      return res.status(404).json({ message: 'Transporter not found' });
    }

    res.status(200).json({ message: 'Transporter deleted successfully' });
  } catch (error) {
    console.error('Error deleting Transporter:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getTransporterData = async (req, res) => {
  const { transporterId } = req.params;

  try {
    const TransporterData = await Transporter.findOne({ transporterId });

    if (TransporterData) {
      res.json({
        vehicleNo: TransporterData.vehicleNo,
        driverName: TransporterData.driverName,
        licenseNo: TransporterData.licenseNo,
        rentRate: TransporterData.rentRate,
        mobileNo: TransporterData.mobileNo,
        address:TransporterData.address,
      });
    } else {
      res.status(404).json({ error: 'Transporter not found' });
    }
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

