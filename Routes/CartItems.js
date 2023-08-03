const express = require('express');
const router = express.Router();
const {AddToCart,getAllCartItems} = require('../Controller/CartItems')

router.route('/addToCart').post(AddToCart);
router.route('/getAllCartItems').get(getAllCartItems)


module.exports = router;