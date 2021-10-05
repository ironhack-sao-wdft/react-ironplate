import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Container, Navbar, Nav } from "react-bootstrap";

function NavbarFunc() {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://res.cloudinary.com/df3hkyurq/image/upload/v1632990983/user_pictures/capture-logo_weqar2.png"
            width="160"
            height="87"
            className="img-fluid"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          {!loggedInUser.user._id ? (
            <Nav>
              <button className="btn  me-3">
                <Nav.Link className="align-text-center" href="/auth/login">
                  <span className="text-strong">Login</span>
                </Nav.Link>
              </button>
              <button className="btn btn-warning me-3">
                <Nav.Link href="/auth/signup">
                  <strong className="text-light">SIGN UP FOR FREE</strong>
                </Nav.Link>
              </button>
            </Nav>
          ) : (
            <Nav>
              <div>
                <span className="me-4">Olá, {loggedInUser.user.name}</span>
                <img
                  style={{ width: "45px", height: "45px", objectFit: "cover" }}
                  className="img-fluid rounded-circle ml-3"
                  src={loggedInUser.user.pictureUrl}
                  alt="foto"
                />
              </div>
              <button
                className="btn nav-item d-flex align-items-center ms-3 me-3"
                onClick={logout}
                style={{ cursor: "pointer" }}
              >
                <span>Sair</span>
              </button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarFunc;
