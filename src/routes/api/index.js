const { Router } = require("express");

const bikes = require("./bikes");
const bookings = require("./bookings");

const router = Router();

router.use("/bikes", bikes);
router.use("/bookings", bookings);

module.exports = router;
