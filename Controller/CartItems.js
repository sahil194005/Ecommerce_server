const CartItemsSchema = require("../Models/CartItems");
const getAllCartItems = async (req, res) => {
	try {
		const response = await CartItemsSchema.find({});
		res.send(response);
	} catch (error) {
		console.log(error);
		re.send(error);
	}
};

const AddToCart = async (req, res) => {
	const obj = req.body;
	try {
		const Product = await CartItemsSchema.findOne({
			ProductId: obj.ProductId,
		});

		if (!Product) {
			const response = await CartItemsSchema.create(obj);

			res.send(response);
		} else {
			const response =
				await CartItemsSchema.findOneAndUpdate(
					{ ProductId: obj.ProductId },
					{ quantity: Product.quantity + obj.quantity }
				);
			res.send(response);
		}
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

const RemoveFromCart = async (req, res) => {
	try {
		const ProductId = req.params.ProductId;
		let response = await CartItemsSchema.findByIdAndDelete(
			ProductId
		);
		console.log(response);
		res.send("removed");
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

module.exports = {
	getAllCartItems,
	AddToCart,
	RemoveFromCart,
};
