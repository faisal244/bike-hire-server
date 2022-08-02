const getAllBikes = (req, res) => {
	return res.send("getAllBikes");
};

const getBikeById = (req, res) => {
	return res.send("getBikeById");
};

module.exports = {
	getAllBikes,
	getBikeById,
};
