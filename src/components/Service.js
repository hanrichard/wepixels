import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";

const Wrapper = styled.div`
	background-color: #fff;
	padding: 100px 0;
	color: #252f3f;
`;

const Service = () => {
	return (
		<Wrapper id='service'>
			<Container>
				<h2>Services</h2>
				<section>
					<h3>Web design</h3>
					<p>
						We are specilising in designing and we have a range of web design
						plans based on your company budget and requirements.
					</p>
				</section>
				<section>
					<h3>Web development</h3>
					<p>
						We are specilising in building complex and responsive for websites,
						online platforms and mobile native apps.
					</p>
				</section>
				<section>
					<h3>Web solution</h3>
					<p>
						We are specilising in working with system integration via
						open-source and different edge technologies.
					</p>
				</section>
			</Container>
		</Wrapper>
	);
};

export default Service;
