import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="text-center hero-image" style={{width:"100vw", height:"40%"}}>
      <div className="" style={{margin:"20%"}}>
        <h1 style={{color:"white"}}>Mala e Cuia</h1>
      <p style={{color:"white"}}>Tudo o que você precisa saber sobre a vida de expatriado.</p>
      </div>

      <div className="mt-5">
        <h5>Escolha o país:</h5>
     
      <div className="card-group">
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
    <Link className="" to="/alemanha">
         <h5 className="card-title">Alemanha</h5>
        </Link>
      
    </div>
  </div>
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
    <Link className="" to="/portugal">
         <h5 className="card-title">Portugal</h5>
        </Link>
      
    </div>
  </div>
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
    <Link className="" to="/reinounido">
         <h5 className="card-title">Reino Unido</h5>
        </Link>
   </div> 
    </div>
  </div>
</div>
    </div>
  );
}

export default Home;