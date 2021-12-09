import React from "react";
import { Link } from "react-router-dom";
import "./Article.css";
import axios from "axios";

const Article = () => {
	const [title, setTitle] = React.useState(" ");
	const [content, setContent] = React.useState(" ");
	const [author, setAuthor] = React.useState(" ");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			title: title,
			content: content,
			author: author,
		};

		console.log({ newPost });

		// const data = FormData();
		try {
			const res = await axios.post("http://localhost:5000/api/posts", {
				title: title,
				content: content,
				author: author,
			});
		} catch (err) {
			console.log(err.response.request);
		}
	};

	return (
		<div className='article'>
			<form className='writeForm' onSubmit={handleSubmit}>
				<div className='writeFormGroup'>
					<input
						type='text'
						placeholder='Title'
						className='writeInput'
						autoFocus={true}
						size='80'
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
						onChange={(e) => setAuthor(e.target.value)}
					></input>
				</div>

				<button className='writeSubmit' type='submit'>
					Publish
				</button>
			</form>
		</div>
	);
};

export default Article;
