import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


import { AuthContext } from "../contexts/authContext";

function Navegador() {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
  <Navbar collapseOnSelect expand="lg" className="top">
      <div className="container-fluid">
        <Navbar.Brand href="/home">
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
            <nav className="navbar-nav">
                 <Nav.Link
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/"
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/lista"
                >
                  Livros
                </Nav.Link>
                <Nav.Link
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/cadastrarLivro"
                >
                  Criar Livro
                </Nav.Link>
              
            </nav>
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
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
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
