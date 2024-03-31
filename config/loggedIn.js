const Employee = require('../models/employee');

module.exports = async function(req, res, next){
    if(req.isAuthenticated()){
        email = req.user.email;
        try{
            const employee = await Employee.findOne({email});
            if(employee && email === employee.email){
                return next();
            }
            else{
                res.redirect('/');
                return;
            }
        }catch(err){
            console.log(err);
        }
    }
    res.redirect('/');
    }
