const { Schema } = require("mongoose");

const addressSchema = {
	addressLine1: {
		type: String,
		required: true,
		minLength: 2,
		maxLength: 50,
		trim: true,
	},
	addressLine2: {
		type: String,
		maxLength: 50,
		trim: true,
	},
	city: {
		type: String,
		required: true,
		minLength: 2,
		maxLength: 100,
		trim: true,
	},
	postcode: {
		type: String,
		required: true,
		minLength: 2,
		maxLength: 20,
		trim: true,
	},
};

const schema = new Schema(addressSchema);

module.exports = schema;
