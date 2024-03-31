const User = require('../models/user');

function createOrder(req,res){
    res.render('ordering/create', {title: "Pizza Orders"});
}

module.exports = {
    createOrder
}