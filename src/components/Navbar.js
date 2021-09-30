import { NavLink, Link } from "react-router-dom";

function Navbar() {
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
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/auth/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <button className="btn btn-warning">
                <Link to="/auth/signup">
                  <strong className="text-light">SIGN UP FOR FREE</strong>
                </Link>
              </button>
            </li>
          </ul>
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
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
