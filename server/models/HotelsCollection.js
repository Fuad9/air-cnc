const mongoose = require("mongoose");

const hotelsCollection = new mongoose.Schema({
	name: { type: String },
});

module.exports = mongoose.model("hotelsCollection", hotelsCollection);
