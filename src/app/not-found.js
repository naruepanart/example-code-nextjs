"use client";
import Button from "react-bootstrap/Button";

export default function NotFound() {
	return (
		<div>
			<h1>Not Found</h1>
			<p>Could not find requested resource</p>
			<h1>
				<Button variant="primary" href="/">
					Back
				</Button>{" "}
			</h1>
		</div>
	);
}
