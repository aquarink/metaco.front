import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Metaco.gg Test</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Leaderboard</Nav.Link>
                            <Nav.Link href="/list">List</Nav.Link>
                            <Nav.Link href="/add">Add</Nav.Link>
                            {/* <NavDropdown title="Manage" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/tournament">Tournament</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/teams">Teams</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/teammember">Team Member</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/user">Users</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;