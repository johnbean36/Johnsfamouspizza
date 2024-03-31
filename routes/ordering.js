const express = require('express');
const router = express.Router();
const loggedIn = require('../config/loggedIn');
const orderingCtrl = require('../controllers/ordering')

router.get('/', loggedIn, orderingCtrl.createOrder);
router.post('/lookup', loggedIn, orderingCtrl.lookup);
router.post('/addcust', loggedIn, orderingCtrl.addCust)

module.exports = router;