const express = require('express');
const router = express.Router();
const loggedIn = require('../config/loggedIn');
const orderingCtrl = require('../controllers/ordering')

router.get('/', loggedIn, orderingCtrl.createOrder);
router.post('/lookup', loggedIn, orderingCtrl.lookup);

module.exports = router;