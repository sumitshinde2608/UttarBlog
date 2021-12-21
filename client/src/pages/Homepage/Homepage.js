import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./../../components/Posts/Posts";
import Article from "../Article/Article";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Homepage.css";

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
			<Navbar />

			<div className='HomepageBackground'>
				<div className='Posts'>
					<Posts postlist={postslist} />
				</div>
				<div className='Sidebar'>
					<Sidebar />
				</div>
				{/* <Article /> */}
			</div>
		</div>
	);
};

export default Homepage;
