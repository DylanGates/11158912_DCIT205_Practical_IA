const mongoose = require('mongoose');

const patientDetails = new mongoose.Schema ({
    Surname: {
        type: String,
        required: true,
    },
    Othernames: {
        type: String,
        required: true,
    },
    relationshipWithPatient: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    }
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;