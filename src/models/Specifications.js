const { Schema } = require("mongoose");

const specificationsSchema = {
	frameSize: {
		type: Number,
	},
	wheelSize: {
		type: Number,
	},
	colour: {
		type: String,
	},
	hasGears: {
		type: Boolean,
	},
	numberOfGears: {
		type: Number,
	},
};

const schema = new Schema(specificationsSchema, {
	_id: false,
});

module.exports = schema;
