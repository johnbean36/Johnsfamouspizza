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
        let counts = 0;
        customerId = customer._id;
        const employee = await Employee.findOne({email: req.user.email});
        let employeeId = employee._id;
        const count = await Order.countDocuments();

        counts = count + 1;
        Order.create({
            employee: employeeId,
            customer: customerId,
            size: req.body.psize,
            cheese: req.body.cheese,
            sauce: req.body.sauce,
            toppings: toppings,
            orderNumber: counts
        });
    }
    catch(err){
        console.log(err);
    }
    res.redirect('/ordering');
}

function showOrders(req,res){
    let orders;
    try{
        Order.find({}).populate('employee').populate('customer').exec().then((orders) => {
            res.render('ordering/show', {
                title: "Show Orders",
                orders: orders                
            });
        }); 
    }
    catch(err){
        console.log(err);
    }
}

function byNumber(req,res){
    res.render("ordering/number", {title: "Lookup Orders", orders: null});

}

function lookupNum(req,res){

    try{
        Order.findOne({orderNumber: Number(req.body.ordernum)}).populate('employee').populate('customer').exec().then((order) => {
            
            res.render('ordering/number', {
                title: "Lookup Orders",
                orders: order,
                customer: order.customer,
                employee: order.employee,
                toppings: order.toppings               
            });
        }); 
    }
    catch(err){
        console.log(err);
    }

}

async function deleteOrder(req,res){
    try{
        await Order.findByIdAndDelete(req.params.id);
    }
    catch(err){
        console.log(err);
    }
    res.redirect('/ordering');
}

module.exports = {
    createOrder,
    lookup,
    addCust,
    newOrder,
    showOrders,
    byNumber,
    lookupNum,
    deleteOrder
}