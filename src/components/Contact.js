import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";

const Wrapper = styled.div`
	background-color: #fff;
	padding: 100px 0;
	color: #252f3f;
`;

const Contact = () => {
	return (
		<Wrapper id='contact'>
			<Container>
				<h2>Get in touch, we'd love to chat!</h2>
				<section>
					<p>
						<b>Phone: </b>
						<span>(02) 7906 8325</span>
					</p>
					<p>
						<b>Email: </b>
						<span>info@we-pixels.com.au</span>
					</p>
				</section>
			</Container>
		</Wrapper>
	);
};

export default Contact;
