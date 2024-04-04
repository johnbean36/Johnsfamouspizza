const express = require('express');
const router = express.Router();
const loggedIn = require('../config/loggedIn');
const orderingCtrl = require('../controllers/ordering')

router.get('/', loggedIn, orderingCtrl.createOrder);
router.post('/lookup', loggedIn, orderingCtrl.lookup);
router.post('/addcust', loggedIn, orderingCtrl.addCust);
router.post('/new', loggedIn, orderingCtrl.newOrder);
router.get('/show', loggedIn, orderingCtrl.showOrders);
router.get('/orderId', loggedIn, orderingCtrl.byNumber);
router.post('/byNum', loggedIn, orderingCtrl.lookupNum);
router.post('/:id', loggedIn, orderingCtrl.deleteOrder);

module.exports = router;