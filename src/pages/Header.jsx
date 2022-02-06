import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Metaco.gg Test</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Leaderboard" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Leaderboard</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/list">List</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/add">Add</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/teams">Teams</Nav.Link>
                            <Nav.Link href="/players">Players</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;