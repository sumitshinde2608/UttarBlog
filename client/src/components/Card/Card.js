import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
	const { title, id, author, content } = props;
	return (
		<div className='postCard'>
			<div className='PostImage'>
				<img src={`https://robohash.org/${title}?200x200`} alt={`${title}`} />
			</div>
			<div className='info'>
				<Link to={`/post/${id}`}>
					<h2> {title} </h2>
				</Link>
				<div className='contentText'>
					<p> {content}</p>
				</div>
				<p>
					<b>{author}</b>
				</p>
			</div>
		</div>
	);
};

export default Card;
