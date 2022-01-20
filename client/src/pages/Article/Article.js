import React from "react";
import "./Article.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
// import Redirect from "react-router/Redirect";

const Article = () => {
	const [title, setTitle] = React.useState(" ");
	const [content, setContent] = React.useState(" ");
	const [author, setAuthor] = React.useState(" ");

	const history = useNavigate();

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
			<div className='article'>
				<form className='writeForm' onSubmit={handleSubmit}>
					<div className='writeFormGroup'>
						<input
							type='text'
							placeholder='Title'
							className='writeInput'
							autoFocus={true}
							size='80'
							required
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

export default Article;
