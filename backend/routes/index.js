const express = require('express');
const router = express.Router();
const homeController =require('../controller/home_controller')
const cartController= require('../controller/cart_controller');
const orderController = require('../controller/order_controller')
const orderFetch = require('../controller/ordfth_controller')


router.use(express.json());
router.get('/',homeController.home);
router.use('/users',require('./users'))
router.get('/cart',cartController.data);

router.post('/orderdata',orderController.userOrder);

router.get('/myorderdata',orderFetch.usrOdrData);

module.exports=router;