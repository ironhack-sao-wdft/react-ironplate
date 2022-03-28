import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


import { AuthContext } from "../contexts/authContext";

function Navegador() {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container  d-flex justify-content-between align-items-center text-light">
        <NavLink className="navbar-brand" to="/">
          System Books
        </NavLink>

        <div className="collapse navbar-collapse" id="#menuPrincipal">
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
      </div>
    </nav>
  );
}

export default Navegador;
