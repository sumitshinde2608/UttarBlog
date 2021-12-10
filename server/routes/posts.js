const router = require("express").Router();
const Post = require("../models/Posts");

//GET ALL POSTS
router.get("/", async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (err) {
		res.json({ message: err });
	}
});

//GetIndividualPost
router.get("/:id", async (req, res) => {
	try {
		const posts = await Post.findById(req.params.id);
		res.json(posts);
	} catch (err) {
		res.json({ message: err });
	}
});

//CREATE NEW POST
router.post("/", async (req, res) => {
	const { title, content, author } = req.body;
	const post = new Post({
		title,
		content,
		author,
	});
	await post
		.save()
		.then(() => res.json("Post added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

//UPDATE POST
router.put("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		try {
			const updatedPost = await Post.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res.status(200).json(updatedPost);
		} catch (err) {
			res.status(404).json("Post not found");
		}
	} catch (err) {
		res.status(404).json("Post not found");
	}
});

//DELETE POST
router.delete("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		try {
			await post.delete();
			res.status(200).json("Post has been deleted");
		} catch (err) {
			res.status(500).json(err);
		}
	} catch (err) {
		res.status(500).json("Post not found");
	}
});
module.exports = router;
