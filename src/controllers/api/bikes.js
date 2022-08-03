const { Bike } = require("../../models");

const getAllBikes = async (req, res) => {
	try {
		const bikes = await Bike.find({});

		return res.json({ data: bikes });
	} catch (error) {
		console.log(`[ERROR]: Failed to get all bikes | ${error.message}`);
	}
};

const getBikeById = async (req, res) => {
	try {
		const { id } = req.params;

		const bike = await Bike.findById(id);

		if (!bike) {
			return res.status(404).json({ success: false });
		}

		return res.json({ data: bike });
	} catch (error) {
		console.log(`[ERROR]: Failed to get bike by id | ${error.message}`);
	}
};

module.exports = {
	getAllBikes,
	getBikeById,
};
