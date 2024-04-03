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
    let toppings = [];
    if(req.body.pep){
        toppings.push("Pepperoni");
    }
    if(req.body.beef){
        toppings.push("Beef");
    }
    if(req.body.sausage){
        toppings.push("Sausage");
    }
    if(req.body.bacon){
        toppings.push("Bacon");
    }
    if(req.body.chicken){
        toppings.push("Chicken");
    }
    if(req.body.tomato){
        toppings.push("Tomato");
    }
    if(req.body.gpepper){
        toppings.push("Green Pepper");
    }
    if(req.body.onion){
        toppings.push("Onion");
    }
    if(req.body.bolive){
        toppings.push("Black Olive");
    }
    if(req.body.mushroom){
        toppings.push("Mushroom");
    }
    if(req.body.jalapeno){
        toppings.push("Jalapeno");
    }

    try{
        const customer = await Customer.findOne({phoneNumber: req.body.phone});
        customerId = customer._id;
        console.log(customerId);
        const employee = await Employee.findOne({email: req.user.email});
        let employeeId = employee._id;
        Order.create({
            employee: employeeId,
            customer: customerId,
            size: req.body.psize,
            cheese: req.body.cheese,
            sauce: req.body.sauce,
            toppings: toppings
        });
    }
    catch(err){
        console.log(err);
    }
    res.redirect('ordering');
}

async function showOrders(req,res){
    let orders;
    try{
        orders = Order.find({});
    }
    catch(err){
        console.log(err);
    }
    res.render('ordering/show', {
        showOrder: orders,
        title: "Show Orders"
    })
}

module.exports = {
    createOrder,
    lookup,
    addCust,
    newOrder,
    showOrders
}