import { Link } from "react-router-dom";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import "./Navmenu.css";
// import Logo from "/images/logoWrittenNoBg.png";

function Navmenu() {
  return (
    <Navbar className="bg-color" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={"/images/logoWrittenNoBg.png"}
          alt={"OddMarket Logo"}
          style={{ width: 200 }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto link-text">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            style={{ width: 230 }}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="mr-auto">
          <Link to="/login" className="link-text">
            Login
          </Link>
          <Link to="/signup">Sign Up</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navmenu;
