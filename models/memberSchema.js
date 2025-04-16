const monggose= require('mongoose');
const LastRequestId = require('./LastRequestId'); 


const memberSchema= new monggose.Schema({
    id: {type:String,
        unique:true},
    name:  {type:String},
    dateOfBirth: {type:Date},
    address: {type:String},
    email: {type:String},
    mobileNo: {type:String},
    username:{type:String},
    password: {type:String},
    BeVolunteer:{type:String},

    securityQuestion: {type:String},
    answer: {type:String},

});

memberSchema.pre('save', async function (next) {
    try {
      // Fetch the lastRequestId document for YourModel
      let lastRequestIdDoc = await LastRequestId.findOne({ collectionName: 'memberschema' });
  
      // If no document found, create a new one with initial lastId
      if (!lastRequestIdDoc) {
        lastRequestIdDoc = new LastRequestId({ collectionName: 'memberschema', lastId: 'M00' });
        await lastRequestIdDoc.save();
      }
  
      // Generate new routeId based on lastId
      const lastIdNumber = parseInt(lastRequestIdDoc.lastId.slice(2)); // Extract the number part
      const newRouteIdNumber = lastIdNumber + 1;
      const newid = 'M' + String(newRouteIdNumber).padStart(3, '0');
  
      // Set the routeId for the current document
      this.id = newid;
  
      // Update the lastId for YourModel
      lastRequestIdDoc.lastId = newid;
      await lastRequestIdDoc.save();
  
      next();
    } catch (error) {
      next(error);
    }
  });
  
module.exports=monggose.model('memberschema',memberSchema);