const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
	next();
});

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
