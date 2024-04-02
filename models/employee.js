const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String, required: true
    },
    employeeNumber: {
        type: Number
    },
});

module.exports = mongoose.model("Employee", employeeSchema);