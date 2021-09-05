import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";

const Logo = styled.a`
	color: #252f3f;
	text-decoration: none;
	font-size: 30px;
`;

const NavWrapper = styled.div`
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #252f3f;
	padding: 20px 0;
`;

const NavList = styled.ul`
	display: flex;
	list-style: none;
`;
const NavItem = styled.li`
	margin-right: 20px;
`;

const NavLink = styled.a`
	color: #252f3f;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const Nav = () => {
	return (
		<Container>
			<NavWrapper>
				<Logo href='/'>
					<b>We-pixels</b>
				</Logo>
				<NavList>
					<NavItem>
						<NavLink href='#home'>Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='#service'>Our service</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='#about'>About us</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='#contact'>Contact</NavLink>
					</NavItem>
				</NavList>
			</NavWrapper>
		</Container>
	);
};

export default Nav;
