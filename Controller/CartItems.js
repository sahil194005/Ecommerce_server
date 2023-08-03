const  CartItemsSchema  = require("../Models/CartItems");
const getAllCartItems = async (req, res) => {
    try {
        const response =await CartItemsSchema.find({});
        res.send(response);
	} catch (error) {
		console.log(error);
		re.send(error);
	}
};

const AddToCart = async (req, res) => {
    const obj = req.body;
    console.log(obj); 
    try { 
        const response = await CartItemsSchema.create(obj);
        console.log(response)
        res.send(response);
        
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}


module.exports = {getAllCartItems,AddToCart}