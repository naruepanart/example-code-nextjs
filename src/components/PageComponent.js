"use client";
import React from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";

const PageComponent = (props) => {
	const { posts, link = "/statics" } = props;
	const { id, title, body } = posts;
	return (
		<Card className="my-3">
			<Card.Body>
				<Link href={`${link}/${id}`}>
					<Card.Title>
						{id}.{title}
					</Card.Title>
				</Link>
				<Card.Text>{body}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default PageComponent;
