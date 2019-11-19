import React from "react";
import { Content, Card } from "react-bulma-components";
import "react-bulma-components/dist/react-bulma-components.min.css";

//components

const CardComp = props => {
	//hooks

	return (
		<Card>
			<Card.Image size="3by2" src={props.source} />
			<Card.Header>
				<Card.Header.Title className="heading-text">
					{props.header}
				</Card.Header.Title>
			</Card.Header>
			<Card.Content>
				<Content>
					<p>{props.description}</p>
					<a href="#" target="_blank">
						Visit Me!
					</a>
				</Content>
			</Card.Content>
		</Card>
	);
};
export default CardComp;
