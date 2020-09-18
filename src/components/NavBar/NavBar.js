import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/home">
        <img src={logo} alt="" className="w-25" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search Your Destination"
            className="ml-sm-2"
          />
        </Form>
        <Nav className="ml-auto pr-3">
          <Link to="/news">News</Link>
          <Link to="/hotels">Destination</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
