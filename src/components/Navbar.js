import { Link, NavLink } from "react-router-dom";
import "../assets/styles/main.scss";

import icon from "../assets/images/paper-plane-icon.png";
function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <img
          src={icon}
          alt="paper airplane icon"
          style={{ maxWidth: "40px" }}
          className="mx-1"
        />
        <Link className="navbar-brand" to="/">
          TRIPPERS
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          aria-controls="toggleMobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="toggleMobileMenu">
          <ul className="navbar-nav ms-auto text-center me-5">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/feed"
              >
                Feed
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/new-post"
              >
                Novo Post
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Perfil
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Ver perfil
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/profile/edit">
                    Editar perfil
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Sair
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
