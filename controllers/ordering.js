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
        check: false,
});
}

async function lookup(req,res){
    let customer;
    let value = req.body.phone;
    let check = false;
    let phone;

    if(req.body.phone){
        try{
            phone = await Customer.findOne({phoneNumber: req.body.phone});
        }catch(err){
            console.log(err);
            return;
        }
        if(phone === null){
            check = true;
        }
    }        

    res.render('ordering/create', {
        title: "Pizza Orders",
        phoneNumber: value,
        customer: customer,
        check: check,
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

async function newOrder(req,res){
    let customerId;
    try{
        const customer = await Customer.findOne({phoneNumber: req.body.phone});
        customerId = customer._id;
        const employee = await Employee.findOne({email: req.user.email});
        employeeId = employee._id;
        console.log(employeeId);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    createOrder,
    lookup,
    addCust,
    newOrder
}