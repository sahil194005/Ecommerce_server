const express = require('express');
const router = express.Router();
const { AddToCart, getAllCartItems, RemoveFromCart } = require('../Controller/CartItems')
const AuthUser = require('../Auth/AuthUser')

router.route('/addToCart').post(AuthUser,AddToCart);
router.route('/getAllCartItems').get(AuthUser,getAllCartItems)
router.route('/RemoveFromCart/:ProductId').delete(AuthUser,RemoveFromCart);


module.exports = router;