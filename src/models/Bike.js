const { Schema, model } = require("mongoose");

const specificationsSchema = require("./Specifications");

const bikeSchema = {
	type: {
		type: String,
		default: "Road",
		enum: ["Mountain", "Racing", "Electric", "Road"],
	},
	model: {
		type: String,
		required: true,
		minLength: 2,
		maxLength: 50,
		trim: true,
	},
	brand: {
		type: String,
		required: true,
		minLength: 2,
		maxLength: 50,
		trim: true,
	},
	imageUrl: {
		type: String,
		trim: true,
		default:
			"https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
	},
	dailyPrice: {
		type: Number,
		required: true,
	},
	weeklyPrice: {
		type: Number,
		required: true,
	},
	specifications: specificationsSchema,
};

const schema = new Schema(bikeSchema);

const Bike = model("Bike", schema);

module.exports = Bike;
