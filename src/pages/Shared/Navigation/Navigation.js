import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";
import logo from "../../../images/logos/logo.png";

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="bg-white"
      className="mb-3"
      variant="light"
    >
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
            <button className="reguler-btn">Login</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
