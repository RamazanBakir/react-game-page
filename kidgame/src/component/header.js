import React from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
	return (
		<>
			<Navbar expand='lg' text-dark bg-light className='headbar '>
				<LinkContainer to='/'>
					<Navbar.Brand className='LogoName'>Kidsgame</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<LinkContainer to='/'>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/contact'>
							<Nav.Link>Contact</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/faq'>
							<Nav.Link>Faq</Nav.Link>
						</LinkContainer>
					</Nav>
					<Form inline>
						<FormControl
							type='text'
							placeholder='Search'
							className='mr-sm-2 searchInput'
						/>
						<Button className='searchBtn'>Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Header;
