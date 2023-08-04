const express = require('express');
const router = express.Router();
const {AddToCart,getAllCartItems,RemoveFromCart} = require('../Controller/CartItems')

router.route('/addToCart').post(AddToCart);
router.route('/getAllCartItems').get(getAllCartItems)
router.route('/RemoveFromCart/:ProductId').delete(RemoveFromCart);


module.exports = router;