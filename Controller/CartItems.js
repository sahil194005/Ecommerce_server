const CartItemsSchema = require("../Models/CartItems");
const getAllCartItems = async (req, res) => {
	try {
		
		let cartItems = await CartItemsSchema.find({ userId: req.User._id });
		res.status(201).json({ msg: "got all cart items", success: true, data: cartItems });
	} catch (error) {
		console.log(error);
		res.status(404).json({ msg: "cant get cart items", success: false });
	}
};

const AddToCart = async (req, res) => {
	const obj = req.body;
	try {
		const Product = await CartItemsSchema.findOne({
			ProductId: obj.ProductId,
			userId: req.User._id,
		});

		if (!Product) {
			await CartItemsSchema.create({ ...obj, userId: req.User._id });
			res.status(201).json({ msg: "added to cart", success: true });
		} else {
			const response = await CartItemsSchema.findOneAndUpdate(
				{ ProductId: obj.ProductId, userId: req.User._id },
				{ quantity: Product.quantity + obj.quantity }
			);
			res.status(201).json({ msg: "added to cart", success: true });
		}
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

const RemoveFromCart = async (req, res) => {
	try {
		const ProductId = req.params.ProductId;
		let response = await CartItemsSchema.findOneAndDelete({ ProductId: ProductId });

		res.send(response);
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

const CartItemsNumber = async (req, res) => {
	try {
		let cartItems = await CartItemsSchema.find({ userId: req.User._id });
		let count = 0;

		cartItems.forEach((item) => {
			count = count+item.quantity
		})

		res.status(201).json({ success: true, msg: "got total number of cart items", data: count });
	} catch (error) {}
};

module.exports = {
	getAllCartItems,
	AddToCart,
	RemoveFromCart,
	CartItemsNumber,
};
