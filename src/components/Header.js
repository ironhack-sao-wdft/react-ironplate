import { Link } from "react-router-dom";
import logo from "../img/logo_branco.png"


export default function Header (){
return <div className="navbar" style={{height: "75px",
opacity: "30%",backgroundColor:"black"
}}> 
<Link className="nav-link active" aria-current="page" to="/">
    <img src={logo} alt="logo" style={{ height: "60px" }} />
  </Link>
    <div className="d-flex">

    <ul className="nav nav-pills">
  
  <li className="nav-item">
    <Link className="nav-link" to="#" style={{ color: "white", textDecoration: "none" }}>Sobre nós</Link>
  </li>

  <li class="nav-item dropdown">
    <Link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false" style={{ color: "white", textDecoration: "none" }}>Países</Link>
    <ul class="dropdown-menu">
      <li><Link class="dropdown-item" to="/alemanha" style={{ color: "white", textDecoration: "none" }}>Alemanha</Link></li>
      <li><Link class="dropdown-item" to="/portugal" style={{ color: "white", textDecoration: "none" }}>Portugal</Link></li>
      <li><Link class="dropdown-item" to="/reinounido" style={{ color: "white", textDecoration: "none" }}>Reino Unido</Link></li>
    
    </ul>
    </li>
  
  <li className="nav-item">
    <Link className="nav-link" to="#" tabindex="-1" aria-disabled="true" style={{ color: "white", textDecoration: "none" }}>Novidades</Link>
  </li>
</ul></div>
<Link className="nav-link" to="#" tabindex="-1" aria-disabled="true" style={{ color: "white", textDecoration: "none" }}>Login</Link>
</div>

}