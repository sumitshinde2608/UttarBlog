import React from "react";
import logo from "./../../assets/logo.png";
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
				<Navbar.Collapse className='justify-content-end'>
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
