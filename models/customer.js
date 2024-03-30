const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    address: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Customer', customerSchema);