import { Link } from "react-router-dom";
import logo from "../img/logo_branco.png";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <div className="navbar">
      <div className="headerBg"></div>

      <Link className="nav-link active" aria-current="page" to="/">
        <img src={logo} alt="logo" style={{ height: "90px" }} />
      </Link>

      <HashLink to="/#login">Login</HashLink>
    </div>
  );
}
