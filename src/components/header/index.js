import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import { HeaderContainer, Logo, NavItem } from "./header";
// import logo from "../../images/logo-light.png";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Navbar collapseOnSelect expand="lg" className="p-0">
          <Navbar.Brand href="/">
            <Logo>Daxi</Logo>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="p-0 ml-auto">
              <Nav.Link href="/" className="p-0">
                <NavItem>Home</NavItem>
              </Nav.Link>
              <NavItem>
                <NavDropdown title="Features" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/articles">Articles</NavDropdown.Item>
                  <NavDropdown.Item href="/moodboard">
                    Mood Tracking Board
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/moodpath">
                    Mood Path
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/reflection">
                    Reflection
                  </NavDropdown.Item>
                </NavDropdown>
              </NavItem>
              <Nav.Link href="/therapy" className="p-0">
                <NavItem>Therapy</NavItem>
              </Nav.Link>
              <Nav.Link href="/help" className="p-0">
                <NavItem>Help</NavItem>
              </Nav.Link>
              <Nav.Link href="/about" className="p-0">
                <NavItem>About</NavItem>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </HeaderContainer>
    </>
  );
}
