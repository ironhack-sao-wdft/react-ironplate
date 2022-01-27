import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../contexts/authContext";

function Navbar() {
    const { loggedInUser, logout } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container  d-flex justify-content-between align-items-center text-light">
            <NavLink className="navbar-brand" to="/">
              Book App
            </NavLink>
            
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
                    to="/Bookcreate"
                  >
                    Criar Livro
                  </NavLink>
                </li>
              </ul>

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

export default Navbar;