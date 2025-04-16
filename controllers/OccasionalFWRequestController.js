const OccasionalFWRequestModel = require('../models/OccasionalFWRequestModel');

exports.createFWOccasionalRequest = async (req, res) => {
    const formData=req.body;
    // Additional validation checks
    const { description, mobileNo,requesterName ,address,email,approxQuantity} = formData;
    const currentDate = new Date().toISOString().split('T')[0];
    const mobileNoRegex = /^[6-9]\d{9}$/;
   
    if(!description){
      return res.json({success:false,message:'Description is Required',focus:'description'});
    }

    
    if(!mobileNo){
      return res.json({success:false,message:'Mobile No is Required',focus:'mobileNo'});
    }

    if(!requesterName){
      return res.json({success:false,message:'Requester Name is Required',focus:'requesterName'});
    }

    if(!email){
      return res.json({success:false,message:'Email Is Required',focus:'email'});
    }

    if(!address){
      return res.json({success:false,message:'Address Is Required',focus:'address'});
    }

    if(!approxQuantity){
      return res.json({success:false,message:'ApproxQuantity Is Required',focus:'approxQuantity'});
    }

    // Check if the email is in a valid format
  if (!email.includes('@')) {
    return res.json({ success: false, message: 'Invalid email format', focus: 'email' });
  }

  // Check if the mobile number matches the regex pattern
  if (!mobileNo.match(mobileNoRegex)) {
    return res.json({ success: false, message: 'Invalid mobile number format', focus: 'mobileNo' });
  }

 
  if (requesterName.match(/[0-9!@#$%^&*]/)) {
    return res.json({ success: false, message: 'Name should not contain any digits or special characters', focus: 'requesterName' });
  }


  
  try {
    
    const newOFWRequest = new OccasionalFWRequestModel(formData);
    await newOFWRequest.save();
    const { password, ...clearedFormData } = formData;
    // Send success response with message and registration ID
    return res.json({ success: true, message: 'Thanks for the request!. We will respond you in few Moments.', requestId: newOFWRequest._id })     
       }
       catch (error) {
    console.error('Error creating Occasional FWRequest:', error);
    res.status(500).json({ message: 'Occasional Food Waste Request failed. Please try again.' });
  }
};


exports.getOccasionalFW = async (req, res) => {
    try {
      const OccasionalFW = await OccasionalFWRequestModel.find();
      res.json(OccasionalFW);
    } catch (error) {
      console.error('Error fetching OccasionalFW:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  


// Update registration
exports.updateOccasionalFWRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const OccasionalFWRequest = await OccasionalFWRequestModel.findByIdAndUpdate(id, req.body, { new: true });

    if (!OccasionalFWRequest) {
      return res.status(404).json({ message: 'OccasionalFWRequest not found' });
    }

    res.status(200).json(OccasionalFWRequest);
  } catch (error) {
    console.error('Error updating OccasionalFWRequest:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Delete registration
exports.deleteOccasionalFWRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const OccasionalFWRequest = await OccasionalFWRequestModel.findByIdAndDelete(id);

    if (!OccasionalFWRequest) {
      return res.status(404).json({ message: 'OccasionalFWRequest not found' });
    }

    res.status(200).json({ message: 'OccasionalFWRequest deleted successfully' });
  } catch (error) {
    console.error('Error deleting OccasionalFWRequest:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


//fetch according to yesterday date
exports.ScheduleOccasional = async(req,res)=>{

  try {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1); // Get yesterday's date
    const formattedDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    const OccasionalFWRequests = await OccasionalFWRequestModel.find({ date: formattedDate });
    res.json(OccasionalFWRequests);
} catch (error) {
    console.error('Error fetching Occasional:', error);
    res.status(500).json({ error: 'Failed to fetch Occasional' });
}
};


