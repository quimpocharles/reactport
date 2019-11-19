import React, { useState } from "react";
import { Container, Columns } from "react-bulma-components";
import "react-bulma-components/dist/react-bulma-components.min.css";

//components

const Contact = () => {
	//hooks

	return (
		<Container className="has-text-centered">
			<Columns>
				{/*left side*/}
				<Columns.Column>
					<form>
						<div class="field">
							<label for="hello" class="label has-text-light">
								Name
							</label>
							<div class="control">
								<input
									id="hello"
									class="input"
									type="text"
									placeholder="Name input"
								/>
							</div>
						</div>

						<div class="field">
							<label class="label has-text-light">Email</label>
							<div class="control">
								<input
									class="input"
									type="email"
									placeholder="Email input"
								/>
							</div>
						</div>

						<div class="field">
							<label class="label has-text-light">Message</label>
							<div class="control">
								<textarea
									class="textarea"
									placeholder="Textarea"
								></textarea>
							</div>
						</div>

						<a class="button is-primary is-fullwidth">Send</a>
					</form>
				</Columns.Column>
				{/*right side*/}
				<Columns.Column>
					<iframe
						title="googlemap"
						id="gmap"
						src="https://www.google.com/maps/embed?pb="
						frameborder="0"
						style={{ border: 0 }}
						allowfullscreen
					></iframe>
				</Columns.Column>
			</Columns>
		</Container>
	);
};
export default Contact;
