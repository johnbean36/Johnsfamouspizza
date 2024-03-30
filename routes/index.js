var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'John\' Famous Pizza' });
});

router.get('/login', passport.authenticate(
  'google',
  {
    scope: ['email'],
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/create',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;
