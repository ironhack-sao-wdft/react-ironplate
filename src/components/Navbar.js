import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

function Navbar() {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://res.cloudinary.com/df3hkyurq/image/upload/v1632990983/user_pictures/capture-logo_weqar2.png"
            width="160"
            height="87"
            className="img-fluid"
            alt="logo"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
          

            {!loggedInUser.user._id ? (<>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/auth/login">
                Login
              </NavLink>
            </li>

            <li className="nav-item">
              <button className="btn btn-warning">
                <NavLink to="/auth/signup">
                  <strong className="text-light">SIGN UP FOR FREE</strong>
                </NavLink>
              </button>
            </li></>) : null}       

          {loggedInUser.user._id ? (
            <div>
              <span className="me-4">Olá, {loggedInUser.user.name}</span>
              <img
                style={{ width: "45px", height: "45px", objectFit: "cover" }}
                className="img-fluid rounded-circle ml-3"
                src={loggedInUser.user.pictureUrl}
                alt="foto"
              />
            </div>
          ) : null}

          {loggedInUser.user._id ? (
              <li
                className="nav-item d-flex align-items-center ml-3"
                onClick={logout}
                style={{ cursor: "pointer" }}
              >
                <span>Sair</span>
              </li>
            ) : null}
            </ul>
            {!loggedInUser.user._id ? (
          <div>
            <a
              className="btn"
              href="https://github.com/Nogueira998/capture-client"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"
                width="30"
                height="30"
                className="img-fluid"
                alt="github"
              />
            </a>
          </div>) : null}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
