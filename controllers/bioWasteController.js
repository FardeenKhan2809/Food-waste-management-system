// controllers/bioWasteController.js

const BioWaste = require('../models/bioWasteModel');


// Controller to create a new bio waste
exports.createBioWaste = async (req, res) => {
  const formData = req.body;
  const { biogasEmail, biogasMobileNo } = req.body; // Extract username, biogasEmail, and biogasMobileNo from the form data

  // Additional validation checks
  const { biogasSlurryLimit,biogasName,biogasAddress} = formData;
  const mobileNoRegex = /^[6-9]\d{9}$/;
 
  
  if (!biogasName) {
    return res.json({ success: false, message: 'Bio-Plant Name is required', focus: 'biogasName' });
  }
  if(!biogasAddress){
    return res.json({ success: false, message: 'Bio-Plant Address is required', focus: 'biogasAddress' });
  }
  if(!biogasSlurryLimit){
    return res.json({success:false,message:'Mention Capacity of Slurry Limit',focus:'biogasSlurryLimit'});
  }
  if(!biogasMobileNo) {
    return res.json({success:false,message:'Mobile number is required',focus:'biogasMobileNo'});
  }

 
  // Check if the biogasEmail is in a valid format
  if (!biogasEmail.includes('@')) {
    return res.json({ success: false, message: 'Invalid Email format', focus: 'biogasEmail' });
  }

  // Check if the mobile number matches the regex pattern
  if (!biogasMobileNo.match(mobileNoRegex)) {
    return res.json({ success: false, message: 'Invalid mobile number format', focus: 'biogasMobileNo' });
  }

  // Check if the organisation name contains digits or special characters
  if (biogasName.match(/[0-9!@#$%^&*]/)) {
    return res.json({ success: false, message: 'Bio-Plant Name should not contain any digits or special characters', focus: 'biogasName' });
  }

 
  try {
    // Check if the username, biogasEmail, or mobile number already exists in the database
    const user = await BioWaste.findOne({ $or: [ { biogasEmail: formData.biogasEmail }, { biogasMobileNo: formData.biogasMobileNo }] });

        if (user) {
            if (user.biogasMobileNo === formData.biogasMobileNo) {
                return res.json({ success: false, message: ' Mobile Number already occupied', focus: 'username' });
            } else if (user.biogasEmail === formData.biogasEmail) {
                return res.json({ success: false, message: 'Email  already registered', focus: 'biogasEmail' });
            } else {
                return res.json({ success: false, message: 'Mobile Number and Email already occupied' });
            } 
          } 
            else
             {
     const newBioWaste = new BioWaste(formData);
    await newBioWaste.save();
      // Clear the form data after successful registration
 const { password, ...clearedFormData } = formData;
 // Send success response with message and registration ID
 return res.json({ success: true, message: 'Bio-Plant done successfully', biogasId: newBioWaste._id })     
  }
  } catch (error) {
    console.error('Error creating bio waste:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



exports.getBiogas = async (req, res) => {
  try {
    const biogas = await BioWaste.find();
    res.json(biogas);
  } catch (error) {
    console.error('Error fetching Bio Gas Plant:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Update biogas
exports.updateBiogas = async (req, res) => {
  const { id } = req.params;

  try {
    const biogas = await BioWaste.findByIdAndUpdate(id, req.body, { new: true });

    if (!biogas) {
      return res.status(404).json({ message: 'Biogas Plant not found' });
    }

    res.status(200).json(biogas);
  } catch (error) {
    console.error('Error updating Biogas Plant:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete registration
exports.deleteBiogas = async (req, res) => {
  const { id } = req.params;

  try {
    const biogas = await BioWaste.findByIdAndDelete(id);

    if (!biogas) {
      return res.status(404).json({ message: 'biogas Plant not found' });
    }

    res.status(200).json({ message: 'BioGas Plant deleted successfully' });
  } catch (error) {
    console.error('Error deleting Biogas Plant:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
