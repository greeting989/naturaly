import React, { useState } from "react";
import {
  Navbar,
  Container,
  Row,
  Button,
  Col,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { useUserAuth } from "../context/Auth";
function Header() {
  const navlinkStyle = {
    color: "#FEF9FF",
    fontWeight: "500",
    textDecoration: "none",
  };
  const btnStyle = {
    width : '90px',
    marginTop : '0.2rem'
  }
  const { user, logOut } = useUserAuth();
  console.log(user);
  //const [profile, setProfile] = useState(initialState)
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar expand="lg" sticky="top">
        <Container fluid className="navbarCont">
          <Navbar.Brand href="#home">
            <img alt="" src={logo} className="d-inline-block align-top" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              <Nav.Link
                className="navlink"
                style={navlinkStyle}
                to="/"
                as={Link}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="navlink"
                style={navlinkStyle}
                to="/products"
                as={Link}
              >
                Products
              </Nav.Link>
              <Nav.Link
                className="navlink"
                style={navlinkStyle}
                to="/aboutus"
                as={Link}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                className="navlink"
                style={navlinkStyle}
                to="/contact"
                as={Link}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                className="navlink"
                style={navlinkStyle}
                to="/cart"
                as={Link}
              >
                Cart
              </Nav.Link>
              {!user ? (
                <Nav.Link
                  className="navlink"
                  style={navlinkStyle}
                  to="/account"
                  as={Link}
                >
                  Login/SignUp
                  <FaUserCircle size={18} />
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link
                    className="navlink"
                    style={navlinkStyle}
                    to="/account"
                    as={Link}
                  >
                    {user.email}
                    <FaUserCircle size={18} />
                  </Nav.Link>
                  <div className="" style={btnStyle}>
                    <Button variant="light" size="sm" onClick={handleLogout}>
                      Log out
                    </Button>
                  </div>
                </>
              )}
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
