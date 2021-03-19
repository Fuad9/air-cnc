const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.efikn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const MongoClient = require("mongodb").MongoClient;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("working"));

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

client.connect((err) => {
	const hotelsCollection = client.db(`${process.env.DB_NAME}`).collection("hotels");

	//to add hotels
	app.post("/upload", (req, res) => {
		const hotels = req.body;

		console.log(hotels);

		hotelsCollection.insertMany(hotels).then((result) => {
			res.send(result.insertedCount > 0);
			console.log(result);
		});
	});
});

app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
});
