
const mongoose = require("mongoose");
const CartItemsSchema = new mongoose.Schema({
	img_id: {
		type: String,
	},
    anime: {
        type: String,
    },
	description: {
		type: String,
	},
	price:{
		type:Number
    } ,
    quantity: {
        type:Number 
    },
    ProductId: {
        type:  mongoose.Schema.Types.ObjectId,
    },
    userId: {
        type:mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model("CartItems", CartItemsSchema);
