const User = require('../models/user');

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

module.exports = {
    createOrder
}