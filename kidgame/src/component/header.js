import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <>
            <Navbar>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        Gefeasoft Kids Games [^_^]
                    </Navbar.Brand>
                </LinkContainer>
            </Navbar>
            <Nav>
                <Nav.Item>
                    <LinkContainer to="/">
                        <Nav.Link>
                            Home
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/games">
                        <Nav.Link>
                            Games
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/faq">
                        <Nav.Link>
                            Faq
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default Header;