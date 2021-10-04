const mongoose= require('mongoose')

const SeenDocSchema = new mongoose.Schema({
    doctorsReport:{
        type: String,
        required: false
    },
    conductLab: {
        type: Boolean,
        required: false
    },
    labType:{
        type: String,
        required: false,
        default: ""
    },
    completed: {
        type: Bolean,
        required: false
    }

});

const SeenDoc = mongoose.model('SeenDoc', SeenDocSchema);

module.exports = SeenDoc;