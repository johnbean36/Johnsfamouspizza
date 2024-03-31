const User = require('../models/user');
const Customer = require('../models/customer');
const Employee = require('../models/employee');
const Order = require('../models/orders');

function createOrder(req,res){
    let value;
    let customer;
    if(req.body.phone){
        value = req.body.phone;
    }
    res.render('ordering/create', {
        title: "Pizza Orders",
        phoneNumber: value,
        customer: customer,
        check: false
});
}

async function lookup(req,res){
    let customer;
    let value = req.body.phone;
    let check = false;
    if(req.body.phone){
        check = true;
    }    
    res.render('ordering/create', {
        title: "Pizza Orders",
        phoneNumber: value,
        customer: customer,
        check: check
    })
}

async function addCust(req,res){
    check = true;
    try{
        const cust = await Customer.create({
            name: req.body.custname,
            phoneNumber: req.body.phone,
            address: req.body.address
        })
    }catch(err){
        console.log(err);
    }
    res.render('ordering/create', {
        title: "Pizza Orders",
        phoneNumber: req.body.phone,
        customer: req.body.custname,
        check: check
    })
}

module.exports = {
    createOrder,
    lookup,
    addCust
}