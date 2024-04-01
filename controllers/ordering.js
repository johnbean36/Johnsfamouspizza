const User = require('../models/user');
const Customer = require('../models/customer');
const Employee = require('../models/employee');
const Order = require('../models/orders');

function createOrder(req,res){
    let value;
    let customer;
    let custId = null;
    if(req.body.phone){
        value = req.body.phone;
    }
    res.render('ordering/create', {
        title: "Pizza Orders",
        phoneNumber: value,
        customer: customer,
        check: false,
        customerId: custId
});
}

async function lookup(req,res){
    let customer;
    let value = req.body.phone;
    let check = false;
    let phone;
    let custId;

    if(req.body.phone){
        try{
            phone = await Customer.findOne({phoneNumber: req.body.phone});
            custId = phone._id;
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
        customerId: custId
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