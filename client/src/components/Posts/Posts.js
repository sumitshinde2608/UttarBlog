import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./../Card/Card";

const CardList = (postlists) => {
	console.log("postlists", postlists.postlist);
	return (
		<div>
			<Container fluid>
				<Row xs={4} md={4} lg={4}>
					{postlists?.postlist.map((data, index) => {
						return (
							<Col>
								<Card
									key={index}
									id={data._id}
									title={data.title}
									author={data.author}
								/>
							</Col>
						);
					})}
				</Row>
			</Container>
		</div>
	);
};

export default CardList;
