import React, { useEffect } from "react";
import "./Update.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router";

const Update = () => {
	const [post, setPost] = React.useState({});

	const history = useNavigate();
	const location = useLocation();

	const path = location.pathname.split("/")[2];

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get(`/posts/${path}`);
			console.log(res.data);

			setPost(res.data);
		};

		getPost();
	}, []);

	const [title, setTitle] = React.useState(post.title);
	const [content, setContent] = React.useState(post.content);
	const [author, setAuthor] = React.useState(post.author);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// const data = FormData();
		try {
			const res = await axios.put("http://localhost:5000/api/posts/" + path, {
				title: title,
				content: content,
				author: author,
			});

			{
				history("/");
			}
		} catch (err) {
			console.log(err.response.request);
		}
	};

	return (
		<div>
			<Navbar />
			<div className='update'>
				<form className='writeForm' onSubmit={handleSubmit}>
					<div className='writeFormGroup'>
						<input
							type='text'
							placeholder='Title'
							className='writeInput'
							autoFocus={true}
							size='80'
							required
							defaultValue={post.title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<br />
					</div>

					<div className='writeFormGroup'>
						<br />
						<textarea
							placeholder='Write your article here'
							typr='text'
							className='writeInput writeText'
							cols='120'
							rows='14'
							required
							defaultValue={post.content}
							onChange={(e) => setContent(e.target.value)}
						></textarea>
					</div>

					<div className='writeFormGroup'>
						<br />
						<input
							placeholder='Author'
							typr='text'
							className='writeInput writeText'
							size='80'
							required
							defaultValue={post.author}
							onChange={(e) => setAuthor(e.target.value)}
						></input>
					</div>

					<button className='writeSubmit writeFormGroup' type='submit'>
						Publish
					</button>
				</form>
			</div>
		</div>
	);
};

export default Update;
