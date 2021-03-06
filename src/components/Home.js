import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";

const Wrapper = styled.div`
	background-color: #252f3f;
	padding: 100px 0;
	color: #fff;
`;

const Home = () => {
	return (
		<Wrapper id='home'>
			<Container>
				<h2>Home</h2>
				<p>
					We-pixels in Sydney specialising in web design, web development, web
					solution and more.
				</p>
			</Container>
		</Wrapper>
	);
};

export default Home;
