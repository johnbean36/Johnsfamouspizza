const User = require('../models/user');
const Customer = require('../models/customer');

function createOrder(req,res){
    let value;
    let customer;
    if(req.body.phone){
        value = req.body.phone;
    }
    res.render('ordering/create', {
        title: "Pizza Orders",
        phoneNumber: value,
        customer: customer
});
}

async function lookup(req, res){
    let customer;
    let value = req.body.phone;
    try{
        customer = await Customer.find(`${req.body.phone}`);
    }catch(err){
        console.log(err);
    }
    res.render('ordering/create', {
        title: "Pizza Orders",
        phoneNumber: value,
        customer: customer
    })
}

module.exports = {
    createOrder,
    lookup
}