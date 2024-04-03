const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const employeeSchema = require('./employee');
const customerSchema = require('./customer');

const orderSchema = new Schema({
    orderNumber: Number,
    employee: {type: Schema.Types.ObjectId, ref: 'Employee'},
    customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
    sauce: {type: String},
    toppings: [{type:String}],
    cheese: {type: String, enum:["No Cheese", "Regular", "Extra Cheese"]},
    size: {type: String, enum:["Small", "Medium", "Large"]},
    totalPrice: {type: Number}
})

module.exports = mongoose.model('Order', orderSchema);