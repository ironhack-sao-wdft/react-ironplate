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
    






// import Nav from "react-bootstrap/Nav";

    // <Navbar collapseOnSelect expand="lg" className="top">
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
    //       {/* <div className="collapse navbar-collapse" id="responsive-navbar-nav"> */}
    //       <Nav>
    //         {/* <ul className="navbar-nav"> */}
    //         {/* <li className="nav-item"> */}
    //         <NavLink
    //           eventKey="1"
    //           className={({ isActive }) =>
    //             `nav-link ${isActive ? "active" : ""}`
    //           }
    //           to="/"
    //           id="home"
    //         >
    //           Home
    //         </NavLink>
    //         {/* </li> */}
    //         {/* <li className="nav-item"> */}
    //         <NavLink
    //           eventKey="2"
    //           className={({ isActive }) =>
    //             `nav-link ${isActive ? "active" : ""}`
    //           }
    //           to="/lista"
    //           id="lista"
    //         >
    //           Livros
    //         </NavLink>
    //         {/* </li> */}
    //         {/* <li className="nav-item"> */}
    //         <NavLink
    //           eventKey="3"
    //           className={({ isActive }) =>
    //             `nav-link ${isActive ? "active" : ""}`
    //           }
    //           to="/cadastrarLivro"
    //           id="criar"
    //         >
    //           Criar Livro
    //         </NavLink>
    //         {/* </li> */}
    //         {/* </ul> */}
    //         {/* </div> */}
    //         <div>
    //           {loggedInUser.user._id ? (
    //             <>
    //               <span className="mr-3">
    //                 Bem-vindo, {loggedInUser.user.name}
    //               </span>

    //               <button onClick={logout} className="btn btn-link">
    //                 Sair
    //               </button>
    //             </>
    //           ) : (
    //             <NavLink
    //               eventKey="4"
    //               className={({ isActive }) =>
    //                 `nav-link ${isActive ? "active" : ""}`
    //               }
    //               to="/login"
    //             >
    //               Entrar
    //             </NavLink>
    //           )}
    //         </div>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </div>
    // </Navbar>


    // import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import { ImHome } from "react-icons/im";
// import { AiFillInfoCircle } from "react-icons/ai";
// import { MdBedroomChild } from "react-icons/md";
// import { IoMdContact } from "react-icons/io";


import Navbar from "react-bootstrap/Navbar";
// import { useContext } from "react";
// import { AuthContext } from "../contexts/authContext";


// import Container from "react-bootstrap/Container";
//  import { NavLink } from "react-router-dom";
 import Nav from "react-bootstrap/Nav";
 import Container from "react-bootstrap/Navbar";

 function Top() {

  // const { loggedInUser, logout } = useContext(AuthContext);


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            
               
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}
export default Top;