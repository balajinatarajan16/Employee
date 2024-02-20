
const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fathername: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    mothername: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    }
});



 
module.exports = mongoose.model('Employee', employeeSchema);
