import React, { useState } from "react";

import { Navbar, Hero, Button, Icon } from "react-bulma-components";

import "react-bulma-components/dist/react-bulma-components.min.css";

const HeroHead = props => {
	const [open, setOpen] = useState(false);

	return (
		<Hero.Head renderAs="header">
			<Navbar active={open}>
				<Navbar.Brand>
					<Navbar.Item onClick={props.nav}>
						<strong className="heading-text">Batch 33</strong>
					</Navbar.Item>
					<Navbar.Burger
						active={open}
						onClick={() => {
							setOpen(!open);
						}}
					/>
				</Navbar.Brand>

				<Navbar.Menu active={open}>
					<Navbar.Container position="end">
						<Navbar.Item>
							<Button
								className={open ? "is-fullwidth" : ""}
								color="dark"
								inverted="Inverted"
							>
								<Icon>
									<i class="far fa-hand-peace"></i>
								</Icon>
								<span className="heading-text">Resume</span>
							</Button>
						</Navbar.Item>
					</Navbar.Container>
				</Navbar.Menu>
			</Navbar>
		</Hero.Head>
	);
};

export default HeroHead;
