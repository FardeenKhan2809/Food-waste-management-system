// CurrentSchedule.js
const mongoose = require('mongoose');

const currentScheduleModel = new mongoose.Schema({
  requestId: { type: String, required: true },
  organisationName: { type: String },
  description: { type: String },
  requesterName: { type: String, required: true },
  date: { type: Date, required: true },
  email: { type: String, required: true },
  mobileNo: { type: String, required: true },
  approxQuantity: { type: Number, required: true },
  routeName: { type: String, required: true },
  status:{type:String,default: 'Approved'},
});

module.exports = mongoose.model('CurrentSchedule', currentScheduleModel);
