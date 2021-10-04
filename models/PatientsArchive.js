const mongoose = require('mongoose');

const PatientsArchiveSchema = new mongoose.Schema({
  patientRecord:{
      type: Array,
      required: false

  }
});

const PatientsArchive = mongoose.model('PatientsArchive', PatientsArchiveSchema);

module.exports = PatientsArchive;