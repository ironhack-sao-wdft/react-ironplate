import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import LogoCircle from '../assets/images/logo sem fundo.png'

import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Alterna navegação"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" onTouchCancel="#">
        Navbar
      </Link>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" onTouchCancel="#">
              Home <span className="sr-only">(Página atual)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onTouchCancel="#">
              Link
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" onTouchCancel="#">
              Desativado
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
