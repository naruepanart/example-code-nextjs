"use client";
import React from "react";
import Card from "react-bootstrap/Card";

const PageIDComponent = (props) => {
	const { posts } = props;
	const { id, title, body } = posts;
	return (
		<Card className="my-3">
			<Card.Body>
				<Card.Title>
					{id}.{title}
				</Card.Title>

				<Card.Text>{body}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default PageIDComponent;
