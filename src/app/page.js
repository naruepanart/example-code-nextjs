"use client";
import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";

const links = [
	{
		label: "CSR",
		href: "/csr",
	},
	{
		label: "ISG",
		href: "/dynamics/isg/1",
	},
	{
		label: "ISR",
		href: "/dynamics/isr",
	},
	{
		label: "SSR",
		href: "/dynamics/ssr",
	},
	{
		label: "Statics",
		href: "/statics",
	},
];

const page = () => {
	return (
		<div>
			<h1>Main</h1>
			{links.map((link) => (
				<Card key={link.href} className="my-3">
					<Card.Body>
						<Link href={link.href}>{link.label}</Link>
					</Card.Body>
				</Card>
			))}
		</div>
	);
};

export default page;
