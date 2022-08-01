require("dotenv").config();

const connectToDatabase = require("./config/connection");

const PORT = process.env.PORT || 4000;

const init = async () => {
	// establish a connection with database
	await connectToDatabase();

	// create a graphQL server

	// start your graphQL server
};

init();
