import { Link, useHistory } from "react-router-dom";
import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./Navmenu.css";
import { AuthContext } from "../contexts/authContext";

function Navmenu() {
  const authContext = useContext(AuthContext);
  let history = useHistory();

  function handleClick() {
    authContext.setLoggedInUser({});
    localStorage.removeItem("loggedInUser");
    history.push("/");
  }

  return (
    <div className="bg-color">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <img
            src={"/images/logoWrittenOrange.png"}
            alt={"OddMarket Logo"}
            style={{ width: 200 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/about-us" className="link-text">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/catalog" className="link-text">
                Products
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            {authContext.loggedInUser.user &&
            authContext.loggedInUser.user._id ? (
              <React.Fragment>
                <Nav.Link>
                  <Link to="/auth/myprofile" className="link-text">
                    My Profile
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/" className="link-text" onClick={handleClick}>
                    Log Out
                  </Link>
                </Nav.Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Nav.Link>
                  <Link to="/auth/login" className="link-text">
                    Login
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/auth/signup" className="link-text">
                    Sign Up
                  </Link>
                </Nav.Link>
              </React.Fragment>
            )}
            <Nav.Link>
              <Link to="/cart" className="link-text">
                <i className="fas fa-shopping-cart mr-5"></i>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navmenu;
