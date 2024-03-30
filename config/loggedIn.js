const Employee = require('../models/employee');


module.exports = async function(req, res, next){
    console.log(req.user);

    if(req.isAuthenticated()){
        email = req.user.email;
        try{
            const employee = await Employee.findOne({email});
            if(employee && email === employee.email){
                return next();
            }
            else{
                res.redirect('/');
            }
        }catch(err){
            console.log(err);
        }
    }
    res.redirect('/');
    }
