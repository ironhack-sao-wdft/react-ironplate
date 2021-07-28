//import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <nav className="navbar fixed-bottom navbar-light nav-footer d-flex justify-content-around">
      <a
        target="_blank"
        href={"https://github.com/filipefcintra"}
        className="linksTextWhite"
      >
        <i className="fab fa-github"></i>
        <p>Filipe Cintra</p>
      </a>

      <a
        target="_blank"
        href={"https://github.com/kamilanitta"}
        className="linksTextWhite"
      >
        <i className="fab fa-github"></i>
        <p>Kamila Nitta </p>
      </a>

      <a
        target="_blank"
        href={"https://github.com/PriscilaVeras"}
        className="linksTextWhite"
      >
        <i className="fab fa-github"></i>
        <p>Priscila Veras</p>
      </a>
    </nav>
  );
}
