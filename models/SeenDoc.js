const mongoose= require('mongoose')


const SeenDocSchema = new mongoose.Schema({
    doctorsPrescription:{
        type: String,
        required: false
    },
    conductLab: {
        type: String,
        required: true,
        default: "off"
    },
    labType:{
        type: String,
        required: false,
        default: ""
    },
    labDetails:{
        type: String,
        required: false,
        default: ""
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }

});

const SeenDoc = mongoose.model('SeenDoc', SeenDocSchema);

module.exports = SeenDoc;