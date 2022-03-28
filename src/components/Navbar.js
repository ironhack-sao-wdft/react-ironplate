import { useContext } from "react";
import { NavLink } from "react-router-dom";
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
            className="cor-texto text-light"
             href="/">
              Home
            </Nav.Link>

            <Nav.Link 
            className="cor-texto text-light"
             href="/lista">
              Livros
            </Nav.Link>

            <Nav.Link 
            className="cor-texto text-light"
             href="/cadastrarLivro">
              Criar Livro
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div>
        {loggedInUser.user._id ? (
          <>
            <span className="mr-3">Bem-vindo, {loggedInUser.user.name}</span>

            <button onClick={logout} className="btn btn-link">
              Sair
            </button>
          </>
        ) : (
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/login"
          >
            Entrar
          </NavLink>
        )}
      </div>
    </Navbar>
  );
}

export default Navegador;
