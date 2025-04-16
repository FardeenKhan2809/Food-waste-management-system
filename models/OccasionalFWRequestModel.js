const mongoose = require('mongoose');
const LastRequestId = require('./LastRequestId'); 


const OccasionalFWRequestModel = new mongoose.Schema({
  requestId: { 
    type: String, 
    unique: true, 
},
  description: {
    type: String,
    required: true,
  },
  date: {
     type: Date,
      default: Date.now, 
    },
  requesterName: {
     type: String,
      required: true,
     },
  approxQuantity: {
     type: Number,
      required: true 
    },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Pending', // Default status set to "Pending"
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  
  
  
});
OccasionalFWRequestModel.pre('save', async function (next) {
  try {
    // Fetch the lastRequestId document for YourModel
    let lastRequestIdDoc = await LastRequestId.findOne({ collectionName: 'OccasionalFWRequestModel' });

    // If no document found, create a new one with initial lastId
    if (!lastRequestIdDoc) {
      lastRequestIdDoc = new LastRequestId({ collectionName: 'OccasionalFWRequestModel', lastId: 'OC000' });
      await lastRequestIdDoc.save();
    }

    // Generate new routeId based on lastId
    const lastIdNumber = parseInt(lastRequestIdDoc.lastId.slice(2)); // Extract the number part
    const newRouteIdNumber = lastIdNumber + 1;
    const newrequestId = 'OC' + String(newRouteIdNumber).padStart(3, '0');

    // Set the routeId for the current document
    this.requestId = newrequestId;

    // Update the lastId for YourModel
    lastRequestIdDoc.lastId = newrequestId;
    await lastRequestIdDoc.save();

    next();
  } catch (error) {
    next(error);
  }
});


module.exports = mongoose.model('OccasionalFWRequestModel', OccasionalFWRequestModel);
