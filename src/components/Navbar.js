import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import LogoCircle from '../assets/images/logosemfundo2.png'
import '../assets/styles/transp-back.css'
import { Link } from 'react-router-dom'

import { NavLink } from 'react-router-dom'

import { useContext } from 'react'
import { Navbar } from 'react-bootstrap'
import { AuthContext } from '../contexts/authContext'

function Menu() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext)

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary navbarbackground d-flex "
      style={{ opacity: '100%' }}
    >
      <Link to="/">
        <img
          src={LogoCircle}
          style={{
            width: '120px',
            margin: '0px',
            padding: '2px',
            border: '0px',
          }}
          alt="The Circle"
        />
      </Link>

      <div
        className="collapse navbar-collapse d-flex justify-content-between"
        id="navbarText"
      >
        <ul className="navbar-nav mr-auto d-flex " style={{ margin: '15px' }}>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" activeClassName="active" to="/About">
              Sobre
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/post">
              Mural Trocas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/posting"
            >
              Solicitar
            </NavLink>
          </li>

          <li>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/allusers"
            >
              Membros
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link text-white"
              activeClassName="active"
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link text-white"
              activeClassName="active"
              to="/signup"
            >
              Cadastrar
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link text-white"
              activeClassName="active"
              to="/profile"
            >
              Perfil
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu
