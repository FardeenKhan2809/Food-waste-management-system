const mongoose = require('mongoose');
const LastRequestId = require('./LastRequestId'); 


const volunteerSchema = new mongoose.Schema({
    volunteerId: { type: String, unique: true },
    volunteerName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    volunteeraddress: { type: String, required: true },
    email: { type: String, required: true },
    volunteermobileNo: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    //Member ID
    id:{type:String, required:true},
    securityQuestion: { type: String, required: true },
    answer: { type: String, required: true },
});


volunteerSchema.pre('save', async function (next) {
    try {
      // Fetch the lastRequestId document for YourModel
      let lastRequestIdDoc = await LastRequestId.findOne({ collectionName: 'Volunteer' });
  
      // If no document found, create a new one with initial lastId
      if (!lastRequestIdDoc) {
        lastRequestIdDoc = new LastRequestId({ collectionName: 'Volunteer', lastId: 'V000' });
        await lastRequestIdDoc.save();
      }
  
      // Generate new VolunteerId based on lastId
      const lastIdNumber = parseInt(lastRequestIdDoc.lastId.slice(2)); // Extract the number part
      const newVolunteerIdNumber = lastIdNumber + 1;
      const newVolunteerId = 'V' + String(newVolunteerIdNumber).padStart(3, '0');
  
      // Set the VolunteerId for the current document
      this.volunteerId = newVolunteerId;
  
      // Update the lastId for YourModel
      lastRequestIdDoc.lastId = newVolunteerId;
      await lastRequestIdDoc.save();
  
      next();
    } catch (error) {
      next(error);
    }
  });
  
  const Volunteer = mongoose.model('Volunteer', volunteerSchema);
  
  module.exports = Volunteer;
  
