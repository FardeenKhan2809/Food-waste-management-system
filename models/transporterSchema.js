const mongoose = require('mongoose');
const LastRequestId = require('./LastRequestId'); 


const transporterSchema = new mongoose.Schema({
  transporterId: {
    type: String,
    unique: true,
  },
  vehicleNo: {
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  driverName: {
    type: String,
    required: true,
  },
  licenseNo: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String, // Changed to Number
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rentRate: {
    type: String, // Changed to Number
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

transporterSchema.pre('save', async function (next) {
  try {
    // Fetch the lastRequestId document for YourModel
    let lastRequestIdDoc = await LastRequestId.findOne({ collectionName: 'Transporter' });

    // If no document found, create a new one with initial lastId
    if (!lastRequestIdDoc) {
      lastRequestIdDoc = new LastRequestId({ collectionName: 'Transporter', lastId: 'T00' });
      await lastRequestIdDoc.save();
    }

    // Generate new routeId based on lastId
    const lastIdNumber = parseInt(lastRequestIdDoc.lastId.slice(2)); // Extract the number part
    const newRouteIdNumber = lastIdNumber + 1;
    const transporterId = 'T' + String(newRouteIdNumber).padStart(3, '0');

    // Set the routeId for the current document
    this.transporterId = transporterId;

    // Update the lastId for YourModel
    lastRequestIdDoc.lastId = transporterId;
    await lastRequestIdDoc.save();

    next();
  } catch (error) {
    next(error);
  }
});


const Transporter = mongoose.model('Transporter', transporterSchema);

module.exports = Transporter;
