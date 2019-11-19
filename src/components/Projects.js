import React, { useState } from "react";
import { Container, Columns, Card, Content } from "react-bulma-components";
import "react-bulma-components/dist/react-bulma-components.min.css";

//components
import CardComp from "./Card.js";

const Projects = () => {
	//hooks

	return (
		<Container className="has-text-centered">
			<Columns>
				<Columns.Column>
					<CardComp
						source="/images/sbLogo.png"
						header="My Static Website"
						description="A static Blog Site built using HTML, CSS and Bootstrap"
					/>
				</Columns.Column>
				<Columns.Column>
					<CardComp
						source="/images/dog.jpg"
						header="Asset Management"
						description="An asset management website built using Javascript, PHP and Laravel"
					/>
				</Columns.Column>
				<Columns.Column>
					<CardComp
						source="/images/sbLogo.png"
						header="Booking System"
						description="A Booking System SPA built using the MERN stack"
					/>
				</Columns.Column>
			</Columns>
		</Container>
	);
};
export default Projects;
