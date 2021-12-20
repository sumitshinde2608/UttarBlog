import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./../../components/Posts/Posts";
import Article from "../Article/Article";
import Navbar from "../../components/Navbar/Navbar";

const Homepage = () => {
	const [postslist, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get("/posts");
			setPosts(res.data);
			console.log(res.data);
		};
		fetchPosts();
	}, []);

	return (
		<div>
			<div>
				<Navbar />
				<div className='container'>
					<Posts postlist={postslist} />
					{/* <Article /> */}
				</div>
			</div>
			{/* <h1>We are here</h1> */}
		</div>
	);
};

export default Homepage;
