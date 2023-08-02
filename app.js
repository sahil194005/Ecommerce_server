const Express = require("express");
require("dotenv").config();
const bodyParser = require('body-parser')
const StoreRoute = require("./Routes/StoreItems");
const connectDB = require("./DB/connect");
const cors = require('cors');
const app = Express();
 
app.use(cors());
app.use(bodyParser.json());
app.use("/store", StoreRoute);
const PORT = process.env.PORT||3005
async function serverStart() {
	try {
		await connectDB();
		app.listen(PORT, () => {
			console.log(`server listening on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
}
serverStart();
