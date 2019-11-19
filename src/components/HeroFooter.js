import React, { useState } from "react";
import { Hero, Tabs } from "react-bulma-components";
import "react-bulma-components/dist/react-bulma-components.min.css";

//components

const HeroFooter = props => {
	//hooks
	const [visible, setVisible] = useState(false);
	const [about, setAbout] = useState(false);
	const [projects, setProjects] = useState(false);
	const [contact, setContact] = useState(false);

	const aboutClickHandler = () => {
		props.about();
		setVisible(true);
		setAbout(true);
		setContact(false);
		setProjects(false);
	};

	const projectsClickHandler = () => {
		props.projects();
		setVisible(true);
		setProjects(true);
		setContact(false);
		setAbout(false);
	};

	const contactClickHandler = () => {
		props.contact();
		setVisible(true);
		setContact(true);
		setAbout(false);
		setProjects(false);
	};

	return (
		<Hero.Footer>
			<Tabs fullwidth="Full Width" className="is-boxed">
				<Tabs.Tab
					active={visible && about ? true : false}
					onClick={aboutClickHandler}
				>
					<a href="#" className="heading-text">
						About Me
					</a>
				</Tabs.Tab>
				<Tabs.Tab
					active={visible && projects ? true : false}
					onClick={projectsClickHandler}
				>
					<a href="#" className="heading-text">
						Projects
					</a>
				</Tabs.Tab>
				<Tabs.Tab
					active={visible && contact ? true : false}
					onClick={contactClickHandler}
				>
					<a href="#" className="heading-text">
						Contact
					</a>
				</Tabs.Tab>
			</Tabs>
		</Hero.Footer>
	);
};
export default HeroFooter;
