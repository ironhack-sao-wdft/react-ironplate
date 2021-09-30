import { NavLink , Link} from "react-router-dom";

function Navbar() {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://res.cloudinary.com/df3hkyurq/image/upload/v1632990983/user_pictures/capture-logo_weqar2.png"
            width="170"
            height="80"
            className="d-inline-block align-top m-0"
            alt="logo"
          />
        </NavLink>
        <div id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/auth/login">
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

            <li className="nav-item">
              <a
                className="btn"
                href="https://github.com/Nogueira998/capture-client"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-center"
                  alt="github"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

