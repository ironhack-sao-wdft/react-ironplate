import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <div className="" style={{backgroundImage: ""}}>
        <h1>Mala e Cuia</h1>
      <p>Tudo o que você precisa saber sobre a vida de expatriado.</p>
      </div>
      
      <div className="d-flex flex-column align-items-center">
        <Link className="btn btn-lg btn-primary" to="/auth/signup">
          Signup here!
        </Link>
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
