const mongoose = require('mongoose');

const SourceTableSchema = new mongoose.Schema({
  sourceId: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  contactPerson: { type: String, required: true },
  mobileNo: { type: String, required: true },
  email: { type: String, required: true },
  mode: {
    regular: Boolean,
    occasional: Boolean
  }
});

module.exports = mongoose.model('SourceTable', SourceTableSchema);