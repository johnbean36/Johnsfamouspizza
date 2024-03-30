const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/create');
const loggedIn = require('../config/loggedIn');

router.get('/', loggedIn, moviesCtrl.createOrder);

module.exports = router;