import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../contexts/authContext";

function Navbar() {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex  d-flex justify-content-between">
      <div className="container  d-flex justify-content-between align-items-center text-light">
        <NavLink className="navbar-brand" to="/">
          <img src="./img/logo.png" alt="Logo" height="100px" width="200px" />
        </NavLink>

        <div className="collapse navbar-collapse" id="#menu-principal">
          <ul className="navbar-nav">
            <li className="nav-item menu">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item menu">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/lista"
              >
                Livros
              </NavLink>
            </li>
            <li className="nav-item menu">
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
        <div>
          {loggedInUser.user._id ? (
            <>
              <span className="text-warning">
                Bem-vindo, {loggedInUser.user.name}
              </span>

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
