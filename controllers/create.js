const User = require('../models/user');

async function createOrder(req,res){
    email = await User.findOne({email: "jmbass36@gmail.com"});
    if(req.user){
        
    }
    else{
        res.redirect('/');
    }
    res.render('create', {title: "hello"});
}

module.exports = {
    createOrder
}