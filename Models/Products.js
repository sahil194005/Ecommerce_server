
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
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
	} 
});

module.exports = mongoose.model("Products", ProductSchema);
