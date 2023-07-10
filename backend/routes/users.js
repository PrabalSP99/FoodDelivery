const express = require('express');
const body =require('express-validator')
const router = express.Router();
const userController = require('../controller/user_controller');
// const orderController = require('../controller/order_controller')

router.get('/profile',userController.profile);
router.post('/signup', userController.create);
router.post('/login', userController.login);

module.exports = router;