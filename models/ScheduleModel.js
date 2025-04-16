// ScheduleModel.js
const mongoose = require('mongoose');

const scheduleModel = new mongoose.Schema({
  requestID: { type: String, required: true },
  organizationName:{type:String},
  description: {type:String},
  requesterName: { type: String, required: true },
  date: { type: Date, required: true },
  email: { type: String, required: true },
  mobileNo: { type: String, required: true },
  approxQuantity: { type: Number, required: true },
  RouteName: { type: String, required: true },
});

module.exports = mongoose.model('scheduleModel', scheduleModel);
