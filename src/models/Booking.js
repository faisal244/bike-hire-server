const { Schema, model } = require("mongoose");

const addressSchema = require("./Address");

const bookingSchema = {
	startDate: {
		type: Date,
		required: true,
		trim: true,
	},
	endDate: {
		type: Date,
		required: true,
		trim: true,
	},
	pickupLocation: addressSchema,
	isDaily: {
		type: Boolean,
		default: true,
	},
	isWeekly: {
		type: Boolean,
		default: false,
	},
	totalCost: {
		type: Number,
		required: true,
	},
	bike: {
		type: Schema.Types.ObjectId,
		ref: "Bike",
	},
};

const schema = new Schema(bookingSchema);

const Booking = model("Booking", schema);

module.exports = Booking;
