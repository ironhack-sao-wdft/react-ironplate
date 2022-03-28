// import { useContext } from "react";
// import { NavLink } from "react-router-dom";

// import { AuthContext } from "../contexts/authContext";

// function Navbar() {
//   const { loggedInUser, logout } = useContext(AuthContext);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container  d-flex justify-content-between align-items-center text-light">
//         <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          

//           <div className="collapse navbar-collapse" id="#menuPrincipal">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink
//                   className={({ isActive }) =>
//                     `nav-link ${isActive ? "active" : ""}`
//                   }
//                   to="/"
//                 >
//                   Home
//                 </NavLink>
//               </li>

//               <li className="nav-item">
//                 <NavLink
//                   className={({ isActive }) =>
//                     `nav-link ${isActive ? "active" : ""}`
//                   }
//                   to="/lista"
//                 >
//                   Livros
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className={({ isActive }) =>
//                     `nav-link ${isActive ? "active" : ""}`
//                   }
//                   to="/cadastrarLivro"
//                 >
//                   Criar Livro
//                 </NavLink>
//               </li>
//             </ul>
            
//           </div>
//         </div>
//         <div>
//           {loggedInUser.user._id ? (
//             <>
//               <span className="mr-3">Bem-vindo, {loggedInUser.user.name}</span>

//               <button onClick={logout} className="btn btn-link">
//                 Sair
//               </button>
//             </>
//           ) : (
//             <NavLink
//               className={({ isActive }) =>
//                 `nav-link ${isActive ? "active" : ""}`
//               }
//               to="/login"
//             >
//               Entrar
//             </NavLink>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
    
// //     <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
// //       <a class="navbar-brand" href="#">Hidden brand</a>
// //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
// //         <li class="nav-item">
// //           <a class="nav-link active" aria-current="page" href="#">Home</a>
// //         </li>
// //         <li class="nav-item">
// //           <a class="nav-link" href="#">Link</a>
// //         </li>
// //         <li class="nav-item">
// //           <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
// //         </li>
// //       </ul>
      
// //     </div>
// //   </div>
  
// // </nav>


import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";


// import Container from "react-bootstrap/Container";
 import { NavLink } from "react-router-dom";
 import Nav from "react-bootstrap/Nav";


// import Nav from "react-bootstrap/Nav";
function Top() {

  const { loggedInUser, logout } = useContext(AuthContext);


  return (
    <Navbar collapseOnSelect expand="lg" className="top">
      <div className="container-fluid">
        <Navbar.Brand href="/">
          <img
            src="./img/logo.png"
            alt="logo"
            width="140"
            height="100"
            className="imagem-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <div className="collapse navbar-collapse" id="responsive-navbar-nav"> */}
            <Nav>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    eventKey="1"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    to="/"
                    id="home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    eventKey="2"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    to="/lista"
                    id="lista"
                  >
                    Livros
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    eventKey="3"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    to="/cadastrarLivro"
                    id="criar"
                  >
                    Criar Livro
                  </NavLink>
                </li>
              </ul>
            </Nav>
          {/* </div> */}
        </Navbar.Collapse>
        <div>
          {loggedInUser.user._id ? (
            <>
              <span className="mr-3">Bem-vindo, {loggedInUser.user.name}</span>

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
    </Navbar>
  );
}
export default Top;