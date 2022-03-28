import { useContext } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";


import { AuthContext } from "../contexts/authContext";

function Navegador() {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-between align-items-center text-light">
        <NavLink className="navbar-brand" to="/">
          System Books
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/lista"
              >
                Livros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/cadastrarLivro"
              >
                Cadastrar Livro
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          {loggedInUser.user._id ? (
            <>
              <span>Bem-vindo, {loggedInUser.user.name}</span>

              <button onClick={logout} className="btn btn-link">
                Sair
              </button>
            </>
          ) : (
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/login"
            >
              Entrar
            </NavLink>
          )}
        </div>
      </div>
    </nav>

    // <Navbar collapseOnSelect expand="lg" className="navegador">
    //   <div className="container-fluid">
    //     <Navbar.Brand href="/">
    //       <img
    //         src="./img/logo.png"
    //         alt="logo"
    //         width="140"
    //         height="100"
    //         className="imagem-logo"
    //       />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />

    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav>
    //         <Link
    //           className={({ isActive }) =>
    //             `nav-link ${isActive ? "active" : ""}`
    //           }
    //           href="/"
    //           id="cor-home"
    //         >
    //           Home
    //         </Link>

    //         <Link
    //           className={({ isActive }) =>
    //             `nav-link ${isActive ? "active" : ""}`
    //           }
    //           href="/lista"
    //           id="cor-list"
    //         >
    //           Livros
    //         </Link>

    //         <Link
    //           className={({ isActive }) =>
    //             `nav-link ${isActive ? "active" : ""}`
    //           }
    //           href="/cadastrarLivro"
    //           id="cor-criar"
    //         >
    //           Criar Livro
    //         </Link>
    //       </Nav>
    //     </Navbar.Collapse>

    //     <div>
    //       {loggedInUser.user._id ? (
    //         <>
    //           <span className="mr-3 text-light">
    //             Bem-vindo, {loggedInUser.user.name}
    //           </span>

    //           <button onClick={logout} className="btn btn-link">
    //             Sair
    //           </button>
    //         </>
    //       ) : (
    //         <Link
    //           className={({ isActive }) =>
    //             `nav-link ${isActive ? "active" : ""}`
    //           }
    //           href="/login"
    //         >
    //           Entrar
    //         </Link>
    //       )}
    //     </div>
    //   </div>
    // </Navbar>
  );
}

export default Navegador;
