import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navigation.css";
import logo from "../../../images/logos/logo.png";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img src={logo} width="150px" alt="" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav-bar">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Our Portfolio</Nav.Link>
              <Nav.Link href="#features">Our Term</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
              <Button>Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
