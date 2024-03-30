const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('create', loggedIn, moviesCtrl.create);
})

module.exports = router;