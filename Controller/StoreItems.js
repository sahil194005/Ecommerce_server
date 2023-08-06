const ProductSchema = require("../Models/Products");

const StoreItems = async (req, res) => {
	try {
		const products = await ProductSchema.find({});
		
		res.send(products);
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

const AddToStore = async (req, res) => {
	try {
		let obj = req.body;
		let objCreated = await ProductSchema.create(obj);
		res.send("obj posted");
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

const GetSingleProduct = async (req, res) => {
	try {
		let _id = req.params.id;
		const product = await ProductSchema.findOne({
			_id: _id,
		});
		res.send(product);
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

module.exports = {
	StoreItems,
	AddToStore,
	GetSingleProduct,
};
