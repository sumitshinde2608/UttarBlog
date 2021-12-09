import React, { useEffect, useState } from "react";
import Card from "./../SinglePost/SinglePost";
// import { useEffect, useState } from "react";

// const CardList = ({ postlists }) => {
// 	const CardsArray = postlists?.map((user, i) => {
// 		return (
// 			<Card
// 				key={i}
// 				id={robots[i].id}
// 				title={robots[i].title}
// 				author={robots[i].author}
// 			/>
// 		);
// 	});

// 	// const Listing = () => {
// 	// 	return CardsArray.map((i) => {
// 	// 		return i;
// 	// 	});
// 	// };

// 	return <div>{CardsArray}</div>;
// };

// export default CardList;

const CardList = (postlists) => {
	console.log("postlists", postlists.postlist);
	return (
		<div>
			{postlists?.postlist.map((data, index) => {
				return (
					<Card
						key={index}
						id={data.id}
						title={data.title}
						author={data.author}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
