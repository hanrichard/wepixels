import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";

const Wrapper = styled.div`
	background-color: #252f3f;
	padding: 100px 0;
	color: #fff;
`;

const About = () => {
	return (
		<Wrapper id='about'>
			<Container>
				<h2>About us</h2>
				<p>
					At We-pixels, we create designs and develop the best responsive
					websites for businesses with different budgets and needs.
				</p>
			</Container>
		</Wrapper>
	);
};

export default About;
