const mongoose = require('mongoose');

const AwaitingDocSchema = new mongoose.Schema({
    patientId: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    nationality:{
        type: String,
        required:true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    programmeLevel:{
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    indexNo:{
        type: String,
        required: true
    },
    temperature: {
        type: String,
        required: true
    },
    weight:{
        type: Number,
        required: true
    },
    bloodPressure: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true,
    }
    
});

const AwaitingDoc = mongoose.model('Awaiting', AwaitingDocSchema);

module.exports = AwaitingDoc;