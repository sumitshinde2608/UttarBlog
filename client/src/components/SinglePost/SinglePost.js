import "./SinglePost.css";
import edit from "./../../assets/edit.png";
import trash from "../../assets/trash.png";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

const SinglePost = (id) => {
	const location = useLocation();
	const history = useNavigate();

	const path = location.pathname.split("/")[2];

	const [post, setPost] = useState({});

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get(`/posts/${path}`);
			console.log(res.data);

			setPost(res.data);
		};

		getPost();
	}, []);

	const HandleDelete = async () => {
		try {
			const res = await axios.delete(`/posts/${path}`);
			console.log(res);
		} catch (err) {}
		history("/");
		// window.location.href = "/";
	};
	return (
		<div>
			<Navbar />
			<div className='SinglePost container'>
				<div className='SinglePostTitleBlock'>
					<p className='SinglePostTitle'>{post.title}</p>
					<div className='SinglePostEdit'>
						<img
							class='SinglePostIcon'
							src={edit}
							hieght='30px'
							width='30px'
						></img>
						<img
							className='SinglePostIcon'
							src={trash}
							onClick={HandleDelete}
							hieght='30px'
							width='30px'
						></img>
					</div>
				</div>
				<div className='SinglePostContent'>
					<p className='SinglePostContentText'>{post.content}</p>
				</div>

				<div className='SinglePostAuthor'>
					<p className='SinglePostAuthorText'>
						Written by <b>{post.author}</b>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SinglePost;
