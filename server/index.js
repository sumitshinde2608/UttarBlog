const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

const postRoute = require("./routes/posts");

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to mongoDB"))
	.catch((err) => {
		console.error("Could  not connect to db...", err);
	});

app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.listen(5000, () => {
	console.log("Server running on port 5000");
});
