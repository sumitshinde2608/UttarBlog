import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
	const { title, id, author } = props;
	return (
		<div className='postCard'>
			<img src={`https://robohash.org/${title}?200x200`} alt={`${title}`} />
			<div className='info'>
				<Link to={`/post/${id}`}>
					<h2> {title} </h2>
				</Link>
				<p>{author}</p>
			</div>
		</div>
	);
};

export default Card;
