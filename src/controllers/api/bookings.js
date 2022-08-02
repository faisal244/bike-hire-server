const getAllBookings = (req, res) => {
	return res.send("getAllBookings");
};

const getBookingById = (req, res) => {
	return res.send("getBookingById");
};

const createBooking = (req, res) => {
	return res.send("createBooking");
};

const updateBookingById = (req, res) => {
	return res.send("updateBookingById");
};

const deleteBookingById = (req, res) => {
	return res.send("deleteBookingById");
};

module.exports = {
	getAllBookings,
	getBookingById,
	createBooking,
	updateBookingById,
	deleteBookingById,
};
