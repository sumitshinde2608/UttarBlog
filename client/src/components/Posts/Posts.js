import React from "react";
import SinglePost from "../SinglePost/SinglePost";

const Posts = ({ postslist }) => {
	return (
		<div className='posts'>
			{postslist.map((p) => (
				<SinglePost post={p} />
			))}
		</div>
	);
};

export default Posts;
