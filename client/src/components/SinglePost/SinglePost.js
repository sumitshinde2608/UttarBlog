import React from "react";
import "./SinglePost.css";

function SinglePost() {
	return (
		<div className='post'>
			<img
				src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
				alt='post'
			/>
			<div className='postInfo'>
				<span className='postTitle'>Post Title</span>
				<hr />
				<span className='postDate'>Post Date</span>
			</div>
		</div>
	);
}

export default SinglePost;
