const express = require('express');
const {StoreItems,AddToStore} = require('../Controller/StoreItems')
const router = express.Router()

router.route('/getProduct').get(StoreItems)
router.route('/addProduct').post(AddToStore);

module.exports = router;