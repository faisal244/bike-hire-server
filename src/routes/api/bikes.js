const { Router } = require("express");

const { getAllBikes, getBikeById } = require("../../controllers/api/bikes");

const router = Router();

router.get("/", getAllBikes);
router.get("/:id", getBikeById);

module.exports = router;
