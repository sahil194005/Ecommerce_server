const express = require('express');
const {StoreItems,AddToStore,GetSingleProduct} = require('../Controller/StoreItems')
const router = express.Router()

router.route('/getProduct').get(StoreItems)
router.route('/addProduct').post(AddToStore);
router.route('/getSingleProduct/:id').get(GetSingleProduct)


module.exports = router;