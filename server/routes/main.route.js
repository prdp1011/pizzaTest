const express = require('express');
const  router = express.Router();
const controller = require('../controllers/main.controller');


router.post('/createOrder', controller.create_order);


module.exports = router;
