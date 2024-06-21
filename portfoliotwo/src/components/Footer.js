// Filename - components/Footer.js

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>About Me</Heading>
						<FooterLink href="#">
							Tristan
						</FooterLink>
                    </Column>
					<Column>
						<Heading>Contact Me</Heading>
						<FooterLink>
							Email: trismageefl@gmail.com
						</FooterLink>
						<FooterLink>
							GitHub: SaltyCowrie
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box> 
    );
};
export default Footer;
