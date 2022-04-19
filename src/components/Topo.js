// import { Navbar,  Container, Nav,  } from "react-bootstrap";
// import { AuthContext } from "../contexts/authContext";
// import { useContext } from "react";
// import {NavLink} from "react-router-dom";


// function Topo(){
//      const { loggedInUser, logout } = useContext(AuthContext);

//     return (
//       <Navbar bg="dark" variant={"dark"} expand="lg" className="mb-3">
//         <Container className="navbar-container">
//           <Navbar.Brand href="/">
//             <img src="./img/logo.png" alt="Logo" height="100px" width="200px" />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <NavLink
//                 className={({ isActive }) =>
//                   `nav-link ${isActive ? "active" : ""}`
//                 }
//                 to="/"
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 className={({ isActive }) =>
//                   `nav-link ${isActive ? "active" : ""}`
//                 }
//                 to="/lista"
//               >
//                 Livros
//               </NavLink>

//               <NavLink
//                 className={({ isActive }) =>
//                   `nav-link ${isActive ? "active" : ""}`
//                 }
//                 to="/cadastrarLivro"
//               >
//                 Criar Livros
//               </NavLink>
//             </Nav>
//           </Navbar.Collapse>
//           <div>
//             {loggedInUser.user._id ? (
//               <>
//                 <span className="text-warning me-3">
//                   Bem-vindo, {loggedInUser.user.name}
//                 </span>

//                 <button onClick={logout} className="btn btn-danger">
//                   Sair
//                 </button>
//               </>
//             ) : (
//               <NavLink
//                 className={({ isActive }) =>
//                   `nav-link ${isActive ? "active" : ""}`
//                 }
//                 to="/login"
//               >
//                 Entrar
//               </NavLink>
//             )}
//           </div>
//         </Container>
//       </Navbar>
//     );
// }
// export default Topo;