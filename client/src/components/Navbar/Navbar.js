import React from "react";
import logo from "./../../assets/logo.png";
import TextLogo from "./../../assets/TextLogo2.png";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NavigationBar = () => {
	return (
		<div>
			<Navbar bg='light'>
				{/* <Container> */}
				<Navbar.Brand href='#home'>
					<Link to='/'>
						<img
							src={logo}
							width='100'
							height='90'
							className='align-top'
							alt='Howler'
						/>
					</Link>
				</Navbar.Brand>
				<Navbar.Brand href='#home'>
					<Link to='/'>
						<img
							src={TextLogo}
							width='140'
							height='50'
							className='align-top'
							alt='Howler'
						/>
					</Link>
				</Navbar.Brand>
				<Navbar.Collapse className='justify-content-end'>
					<div>
						<a style={{ padding: "20px" }}>Home</a>
						<a style={{ padding: "20px" }}>About Us</a>
						<a style={{ padding: "20px" }}>Contact Us</a>
					</div>
					<div style={{ padding: "20px" }}>
						<Link to='/write'>
							<Button variant='dark'>Write</Button>
						</Link>
					</div>
				</Navbar.Collapse>
				{/* </Container> */}
			</Navbar>
		</div>
	);
};

export default NavigationBar;
