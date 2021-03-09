import { Link } from "react-router-dom";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import "./Navmenu.css";

function Navmenu() {
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
          <Link to="/newproduct" className="link-text">
            New Product
          </Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            style={{ width: 230 }}
          />
          <Button variant="outline-light">Search</Button>
        </Form>
        <Nav className="mr-auto">
          <Link to="/auth/login" className="link-text">
            Login
          </Link>
          <Link to="/auth/signup" className="link-text">
            Sign Up
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navmenu;
