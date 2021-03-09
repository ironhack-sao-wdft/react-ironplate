import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navmenu.css";
import { AuthContext } from "../contexts/authContext";

function Navmenu() {
  const authContext = useContext(AuthContext);
  console.log(authContext);
  return (
    <Navbar className="bg-color d-flex justify-content-around" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={"/images/logoWrittenNoBg.png"}
          alt={"OddMarket Logo"}
          style={{ width: 200 }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto link-text">
          <Link to="/" className="link-text">
            Home
          </Link>
          <Link to="/catalog" className="link-text">
            Catalog
          </Link>
        </Nav>
        <Nav className="mr-auto link-text">
          {!authContext.user._id ? (
            <div>
              <Link to="/auth/login" className="link-text">
                Login
              </Link>
              <Link to="/auth/signup" className="link-text">
                Sign Up
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/auth/myprofile">My Profile</Link>
              <Link to="/auth/logout">Log Out</Link>
            </div>
          )}
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navmenu;
