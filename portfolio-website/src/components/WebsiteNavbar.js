import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function WebsiteNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="bg-color" variant="dark">
      <Container className='py-2'>
        <Navbar.Brand as={Link} to="/">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/resume">
              Resume
            </Nav.Link>
            <NavDropdown title="Experience" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/software-experience">
                Software Experience
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/hardware-experience">
                Hardware Experience
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WebsiteNavbar;
