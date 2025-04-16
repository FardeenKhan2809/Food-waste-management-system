const mongoose = require('mongoose');
const LastRequestId = require('./LastRequestId'); 
const routeSchema = new mongoose.Schema({
  routeId:
  {
    type: String,
    unique: true,
  },
  routeName:
  {
    type: String,
    required: true,
  },
  routeLandmark:
  {
    type: String,
    required: true,
  },
  transporterId:
  {
    type: String,
    required:true, // Change to String type
   
  },
  date:
  {
    type: Date,
    default: Date.now,
    
  },
  transporterdriveName: 
  {
    type: String, // Change to String type
  },
  transportermobileNo:
   {
    type: String, // Change to String type
  },
  transportervehicleNo:
  {
    type: String, // Change to String type
  },
  transporterlicenseNo: 
  {
    type: String, // Change to String type
  },
  transporteraddress:
  {
    type: String, // Change to String type
  },
  transporterrentRate:
  {
    type: String, // Change to String type
  },
  volunteerId: 
  {
    type: String,
    required:true, // Change to String type
  },
  volunterName:
  { 
   type: String,
  },
  volunteeraddress:
  { 
   type: String,
  },
  volunteermobileNo:
  { 
   type: String,
    },
});

routeSchema.pre('save', async function (next) {
  try {
    // Fetch the lastRequestId document for YourModel
    let lastRequestIdDoc = await LastRequestId.findOne({ collectionName: 'Route' });

    // If no document found, create a new one with initial lastId
    if (!lastRequestIdDoc) {
      lastRequestIdDoc = new LastRequestId({ collectionName: 'Route', lastId: 'RT000' });
      await lastRequestIdDoc.save();
    }

    // Generate new routeId based on lastId
    const lastIdNumber = parseInt(lastRequestIdDoc.lastId.slice(2)); // Extract the number part
    const newRouteIdNumber = lastIdNumber + 1;
    const newRouteId = 'RT' + String(newRouteIdNumber).padStart(3, '0');

    // Set the routeId for the current document
    this.routeId = newRouteId;

    // Update the lastId for YourModel
    lastRequestIdDoc.lastId = newRouteId;
    await lastRequestIdDoc.save();

    next();
  } catch (error) {
    next(error);
  }
});

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;
