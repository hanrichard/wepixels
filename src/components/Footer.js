import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";

const Wrapper = styled.div`
	background-color: #252f3f;
	padding: 20px 0;
	color: #fff;
	text-align: center;
`;

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<Wrapper>
			<Container>
				<footer>© {year} We-pixels Pty Ltd, ABN 56 627 118 665</footer>
			</Container>
		</Wrapper>
	);
};

export default Footer;
