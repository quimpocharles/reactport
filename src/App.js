import React, { useState } from "react";
import { Hero, Container, Heading } from "react-bulma-components";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "./App.css";

//components
import HeroHead from "./components/HeroHead";
import HeroFooter from "./components/HeroFooter";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
	//hooks
	const [whichComponentToShow, setComponentToShow] = useState("landing");

	const landingClickHandler = () => {
		setComponentToShow("landing");
	};

	const aboutClickHandler = () => {
		setComponentToShow("about");
	};

	const contactClickHandler = () => {
		setComponentToShow("contact");
	};

	const projectsClickHandler = () => {
		setComponentToShow("projects");
	};

	if (whichComponentToShow === "landing") {
		return (
			<Hero size="fullheight" color="dark">
				<HeroHead nav={landingClickHandler} />
				<Hero.Body>
					{/* render components here */}
					<Container className="has-text-centered">
						<Heading size={1}>
							<h1 className="heading-text">Charles Quimpo</h1>
						</Heading>
						<Heading subtitle size={4}>
							Web Developer Portfolio
						</Heading>
					</Container>
				</Hero.Body>
				<HeroFooter
					about={aboutClickHandler}
					projects={projectsClickHandler}
					contact={contactClickHandler}
				/>
			</Hero>
		);
	} else if (whichComponentToShow === "about") {
		return (
			<Hero size="fullheight" color="dark">
				<HeroHead nav={landingClickHandler} />
				<Hero.Body>
					{/* render components here */}
					<About />
				</Hero.Body>
				<HeroFooter
					about={aboutClickHandler}
					projects={projectsClickHandler}
					contact={contactClickHandler}
				/>
			</Hero>
		);
	} else if (whichComponentToShow === "contact") {
		return (
			<Hero size="fullheight" color="dark">
				<HeroHead nav={landingClickHandler} />
				<Hero.Body>
					{/* render components here */}
					<Contact />
				</Hero.Body>
				<HeroFooter
					about={aboutClickHandler}
					projects={projectsClickHandler}
					contact={contactClickHandler}
				/>
			</Hero>
		);
	} else if (whichComponentToShow === "projects") {
		return (
			<Hero size="fullheight" color="dark">
				<HeroHead nav={landingClickHandler} />
				<Hero.Body>
					{/* render components here */}
					<Projects />
				</Hero.Body>
				<HeroFooter
					about={aboutClickHandler}
					projects={projectsClickHandler}
					contact={contactClickHandler}
				/>
			</Hero>
		);
	}

	return null;

	// return (
	// 	<Hero size="fullheight" color="dark">
	// 		<HeroHead />
	// 		<Hero.Body>{/* render components here */}</Hero.Body>
	// 		<HeroFooter />
	// 	</Hero>
	// );
}
export default App;
