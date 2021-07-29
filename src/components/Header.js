import { Link } from "react-router-dom";
import logo from "../img/logo_branco.png";

export default function Header() {
  return (
    <div className="navbar">
      <div className="headerBg"></div>

      <Link className="nav-link active" aria-current="page" to="/">
        <img src={logo} alt="logo" style={{ height: "90px" }} />
      </Link>

      <Link
        className="nav-link"
        to="#"
        tabindex="-1"
        aria-disabled="true"
        style={{ color: "white", textDecoration: "none" }}
      >
        Login
      </Link>
    </div>
  );
}
