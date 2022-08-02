const { Router } = require("express");

const {
	getAllBookings,
	getBookingById,
	createBooking,
	updateBookingById,
	deleteBookingById,
} = require("../../controllers/api/bookings");

const router = Router();

router.get("/", getAllBookings);
router.get("/:id", getBookingById);
router.post("/", createBooking);
router.put("/:id", updateBookingById);
router.delete("/:id", deleteBookingById);

module.exports = router;
