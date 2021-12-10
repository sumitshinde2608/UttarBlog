import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
	const { title, id, author } = props;
	return (
		<div className='bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
			<img src={`https://robohash.org/${title}?200x200`} alt={`${title}`} />
			<div>
				<Link to={`/post/${id}`}>
					<h2> {title} </h2>
				</Link>
				<p>{author}</p>
			</div>
		</div>
	);
};

export default Card;
