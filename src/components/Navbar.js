import { useContext } from "react";
import { Navbar, Nav,  } from "react-bootstrap";

import { AuthContext } from "../contexts/authContext";
import {NavLink} from "react-router-dom";


function Header() {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant={"dark"} expand="lg" className="topo">
      {/* <Container className="container-fluid"> */}
      <Navbar.Brand href="/">
        <img src="./img/logo.png" alt="Logo" height="100px" width="200px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav-menu">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/lista"
          >
            Livros
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/cadastrarLivro"
          >
            Criar Livro
          </NavLink>

          <div className="nav-menu">
            {loggedInUser.user._id ? (
              <>
                <span className="text-warning me-3">
                  Bem-vindo, {loggedInUser.user.name}
                </span>

                <button onClick={logout} className="btn btn-danger">
                  Sair
                </button>
              </>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/login"
              >
                Entrar
              </NavLink>
             
            )}
          </div>
        </Nav>
      </Navbar.Collapse>

      {/* </Container> */}
    </Navbar>
  );
}

export default Header;
