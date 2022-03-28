import { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { AuthContext } from "../contexts/authContext";

function Navegador() {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand="lg" className="navegador">
      <div className="container-fluid">
        <Navbar.Brand href="/">
          <img
            src="./img/logo.png"
            alt="logo"
            width="140"
            height="100"
            className="imagem-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              href="/"
              id="cor-home"
            >
              Home
            </Nav.Link>

            <Nav.Link
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              href="/lista"
              id="cor-list"
            >
              Livros
            </Nav.Link>

            <Nav.Link
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              href="/cadastrarLivro"
              id="cor-criar"
            >
              Criar Livro
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div>
          {loggedInUser.user._id ? (
            <>
              <span className="mr-3 text-light">
                Bem-vindo, {loggedInUser.user.name}
              </span>

              <button onClick={logout} className="btn btn-link">
                Sair
              </button>
            </>
          ) : (
            <Nav.Link
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              href="/login"
            >
              Entrar
            </Nav.Link>
          )}
        </div>
      </div>
    </Navbar>
  );
}

export default Navegador;
