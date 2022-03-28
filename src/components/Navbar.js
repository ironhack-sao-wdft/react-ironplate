import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../contexts/authContext";

function Navbar() {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container  d-flex justify-content-between align-items-center text-light">
        <NavLink className="navbar-brand" to="/">
          <img
            src="./img/logo.png"
            alt="logo"
            width="140"
            height="100"
            className="imagem-logo"
          />
        </NavLink>
        <nav className="navbar-toggle" aria-controls="responsive-navbar-nav" />
          <nav className="navbar-collapse me-auto responsive-navbar-nav">

        <div className="collapse navbar-collapse" id="#menuPrincipal">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/lista"
              >
                Livros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/cadastrarLivro"
              >
                Criar Livro
              </NavLink>
            </li>
          </ul>
        </div>
        </nav>
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

export default Navbar;
