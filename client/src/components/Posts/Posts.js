import React, { useEffect, useState } from "react";
import Card from "./../Card/Card";

const CardList = (postlists) => {
	console.log("postlists", postlists.postlist);
	return (
		<div>
			{postlists?.postlist.map((data, index) => {
				return (
					<Card
						key={index}
						id={data._id}
						title={data.title}
						author={data.author}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
