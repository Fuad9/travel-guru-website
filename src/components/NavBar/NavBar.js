import React, { useContext } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/Logo.png";
import "./NavBar.css";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleSlide = () => {
    document.querySelector(".nav-links").classList.toggle("nav-active");
    document.querySelectorAll(".nav-links li").forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    document.querySelector(".nav-menu").classList.toggle("toggle");
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/home">
          <img src={logo} alt="" style={{ width: "100px" }} />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/news" style={{ textDecoration: "none" }}>
            News
          </Link>
        </li>
        <li>
          <Link to="/destination" style={{ textDecoration: "none" }}>
            Destination
          </Link>
        </li>
        <li>
          <Link to="/blog" style={{ textDecoration: "none" }}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </li>
      </ul>
      <div className="nav-menu" onClick={handleSlide}>
        <div className="link1"></div>
        <div className="link2"></div>
        <div className="link3"></div>
      </div>
    </nav>
  );
};

export default NavBar;

// <Navbar expand="lg" style={{ background: "transparent" }}>
//       <Navbar.Brand href="/home">
//         <img src={logo} alt="" className="w-25" />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Form inline>
//           <FormControl
//             type="text"
//             placeholder="Search Your Destination"
//             className="ml-sm-2"
//           />
//         </Form>
//         <Nav className="ml-auto pr-3">
//           <Link className="text-dark mx-4 text-decoration-none" to="/news">
//             News
//           </Link>
//           <Link className="text-dark mx-4 text-decoration-none" to="/hotels">
//             Destination
//           </Link>
//           <Link className="text-dark mx-4 text-decoration-none" to="/blog">
//             Blog
//           </Link>
//           <Link className="text-dark mx-4 text-decoration-none" to="/contact">
//             Contact
//           </Link>
//           <Link className="text-dark mx-4 text-decoration-none" to="/login">
//             <Button>Login</Button>
//           </Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
