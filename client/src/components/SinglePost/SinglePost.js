import "./SinglePost.css";
import edit from "./../../assets/edit.png";
import trash from "../../assets/trash.png";
import React from "react";

const SinglePost = () => {
	return (
		<div className='SinglePost container'>
			<div className='SinglePostTitleBlock'>
				<p className='SinglePostTitle'>Title</p>
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
						hieght='30px'
						width='30px'
					></img>
				</div>
			</div>
			<div className='SinglePostContent'>
				<p className='SinglePostContentText'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
					urna eget consectetur venenatis, nisl lectus aliquet nunc, eget
					aliquet nisl nunc eget aliquet nisl nunc eget aliquet nisl nunc eget
					aliquet nisl nunc eget aliquet nisl nunc eget aliquet nisl nunc eget
					aliquet nisl nunc eget aliquet nisl nunc eget aliquet nisl nunc eget
					aliquet nisl nunc eget
				</p>
			</div>

			<div className='SinglePostAuthor'>
				<p className='SinglePostAuthorText'>
					Written by <b>Sumit</b>
				</p>
			</div>
		</div>
	);
};

export default SinglePost;
