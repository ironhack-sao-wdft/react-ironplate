import { useContext } from 'react'
import {NavLink} from 'react-router-dom'

import { AuthContext } from '../contexts/authContext'

function Navbar() {

    const { loggedInUser, logout } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-between align-items-center text-light">
        <NavLink className="navbar-brand" to="/">eBooks</NavLink>
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink 
                    className={({IsActive}) => 
                        `nav-link ${IsActive ? 'active' : ''}`
                    }
                    to="/book/list"
                    >
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                    className={({ IsActive }) => 
                        `nav-link ${IsActive ? "active" : ""}`
                    }
                    to="/book/create"
                    >
                    Novo Livro
                </NavLink>
            </li>
            {/* <li className='nav-item'>
                <NavLink 
                    className={({IsActive}) => 
                        `nav-link ${IsActive ? 'active' : ''}`
                    }
                    to="/book/list"
                    >
                    Livros
                </NavLink>

                </li> */}
            </ul>
        </div>
        <div>
        {loggedInUser.user._id ? (
        <>
        <span>Bem-vindo(a), {loggedInUser.user.name}</span>
        <button onClick={logout} class="btn btn-link">Sair</button>
        </>
        ) : (
                <NavLink 
                    className={({ IsActive }) => 
                        `nav-link ${IsActive ? "active" : ""}`
                    }
                    to="/login"
                    >
                    Entrar
                </NavLink>)}
        </div>
        </div>
    </nav>)
}

export default Navbar