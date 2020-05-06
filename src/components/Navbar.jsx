import React from 'react';
import { Navbar as BootstrapNav, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
export default function Navbar() {
  return (
    <BootstrapNav collapseOnSelect expand="lg" bg="dark" variant="dark">
      <LinkContainer to="/">
        <BootstrapNav.Brand>Girlscript</BootstrapNav.Brand>
      </LinkContainer>
      <BootstrapNav.Toggle aria-controls="responsive-navbar-nav" />
      <BootstrapNav.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer exact to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/team">
            <Nav.Link>Team</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/contact">
            <Nav.Link>Contact us</Nav.Link>
          </LinkContainer>
        </Nav>
      </BootstrapNav.Collapse>
    </BootstrapNav>
  );
}
