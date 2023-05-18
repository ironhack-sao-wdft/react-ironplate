import { Link } from "react-router-dom";
import logo from "../img/logo_branco.png";

export default function Header() {
  return (
    <div>
      <div className="navbar justify-content-around headerBg">
        <Link className="nav-link active " aria-current="page" to="/">
          <img
            src={logo}
            alt="logo"
            className="login-nav"
            style={{ height: "12vh" }}
          />
        </Link>

        <Link
          className="nav-link login-nav"
          to="/auth/login"
          tabindex="-1"
          aria-disabled="true"
          style={{ color: "white", textDecoration: "none" }}
        >
          Login
        </Link>
      </div>
    </div>
  );
}
