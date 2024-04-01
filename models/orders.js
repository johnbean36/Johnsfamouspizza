const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const employeeSchema = require('./employee');
const customerSchema = require('./customer');

const orderSchema = new Schema({
    employee: {type: mongoose.Schema.Types.ObjectId, ref: 'Employee'},
    customer: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
    sauce: {type: Boolean},
    cheese: {type: String, enum:["No Cheese", "Regular", "Extra Cheese"]},
    size: {type: String, enum:["Small", "Medium", "Large"]},
    totalPrice: {type: Number}
})