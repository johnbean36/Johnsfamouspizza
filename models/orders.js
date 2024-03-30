const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const employeeSchema = require('./employee');
const customerSchema = require('./customer');

const orderSchema = new Schema({
    employee: {type: mongoose.Schema.Types.ObjectId, ref: 'Employee'},
    customer: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer'}
})