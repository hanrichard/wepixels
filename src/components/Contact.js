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
				<h2>Contact</h2>
			</Container>
		</Wrapper>
	);
};

export default Contact;
