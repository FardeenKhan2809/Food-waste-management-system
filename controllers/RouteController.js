const Route = require('../models/Route');



exports.createRoute = async (req, res) => {
  const formData=req.body;
  // Additional validation checks
  const { routeName,routeLandmark,transporterId,transporterdriveName,transportervehicleNo,transporterlicenseNo,transportermobileNo,transporteraddress,transporterrentRate,volunteerId,volunteerName,volunteeraddress,volunteermobileNo} = formData;

  if(!routeName){
    return res.json({success:false,message:'Route Name is Required',focus:'routeName'});
  }

  if(!routeLandmark){
    return res.json({success:false,message:'Landmark is Mandatory',focus:'routeLandmark'});
  }
  if(!transporterId){
    return res.json({success:false,message:'ID Of Transporter is Mandatory',focus:'transporterId'});
  }
  if(!transporterdriveName){
    return res.json({success:false,message:'Driver Name is Required',focus:'transporterdriveName'});
  }
  
  if(!transportervehicleNo){
    return res.json({success:false,message:'Vehicle no is Required',focus:' transportervehicleNo'});
  }
  if(!transportermobileNo){
    return res.json({success:false,message:'Transporter Mobile no is Required',focus:'transportermobileNo'});
  }
  if(!transporterlicenseNo){
    return res.json({success:false,message:'Transporter Lisence no is Required',focus:'transporterlisenceNo'});
  }
  if(!transporteraddress){
    return res.json({success:false,message:'Transporter Address is Required',focus:'transporteraddress'});
  }
  if(!transporterrentRate){
    return res.json({success:false,message:'Transporter Rent-Rate is Required',focus:'transporterrent-Rate'});
  }
  if(!volunteerId){
    return res.json({success:false,message:'ID of Volunteer is Mandatory',focus:'volunteerId'});
  }
  if(!volunteerName){
    return res.json({success:false,message:'Volunteer Name is Required',focus:'volunteerName'});
  }
  if(!volunteermobileNo){
    return res.json({success:false,message:'Volunteer Mobile No is Required',focus:'volunteermobileNo'});
  }
  if(!volunteeraddress){
    return res.json({success:false,message:'Volunteer Address is Required',focus:'volunteeraddress'});
  }


  try {
    const newRoute = new Route(formData);
    await newRoute.save();
    const { password, ...clearedFormData } = formData;
    // Send success response with message and registration ID
    return res.json({ success: true, message: 'Route is defined. Now make a Schedule.', routeId: newRoute._id })     
  
  } catch (error) {
    console.error('Error creating Route:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.' });
  }

};

exports.getRoute = async (req, res) => {
  try {
    const getRoute = await Route.find();
    res.json(getRoute);
  } catch (error) {
    console.error('Error fetching Route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to fetch route names according to date
// Function to fetch routeName according to the current date
exports.fetchRoutesByCurrentDate = async (req, res) => {
  try {
    // Get the current date
    const currentDate = new Date();
    
    // Extract year, month, and day from the current date
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month starts from 0
    const day = String(currentDate.getDate()).padStart(2, '0');

    // Construct the date string in the format YYYY-MM-DD
    const dateString = `${year}-${month}-${day}`;

    // Find routes for the current date
    const routes = await Route.find({ date: { $gte: new Date(dateString), $lt: new Date(dateString + 'T23:59:59.999Z') } });

    // Extract routeName from the routes
    const routeNames = routes.map(route => route.routeName);

    // Send the routeNames as the response
    res.json({ routeNames });
  } catch (error) {
    // Handle error
    res.status(500).json({ error: error.message });
  }
};


//fetch according to yesterday date
exports.viewdailyroutes = async(req,res)=>{

  try {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1); // Get yesterday's date
    const formattedDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    const route = await Route.find({ date: formattedDate });
    res.json(route);
} catch (error) {
    console.error('Error fetching Route:', error);
    res.status(500).json({ error: 'Failed to fetch Route' });
}
};
