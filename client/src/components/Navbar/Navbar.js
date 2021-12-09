import React from "react";
import logo from "./../../assets/logo.png";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const NavigationBar = () => {
	return (
		<div>
			<Navbar bg='light'>
				{/* <Container> */}
				<Navbar.Brand href='#home'>
					<img
						src={logo}
						width='100'
						height='90'
						className='align-top'
						alt='Howler'
					/>
				</Navbar.Brand>
				<Navbar.Collapse className='justify-content-end'>
					<div style={{ padding: "20px" }}>
						<Button variant='dark'>Write</Button>
					</div>
				</Navbar.Collapse>
				{/* </Container> */}
			</Navbar>
		</div>
	);
};

export default NavigationBar;
