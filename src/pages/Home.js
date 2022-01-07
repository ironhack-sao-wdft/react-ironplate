import React from "react";
import ListaLivro from "../pages/Livros/ListaLivro";
import Rodape from "../components/Rodape";
import { Link } from "react-router-dom";



function Home() {
  return (
    <div>
      <div className=" container d-block justify-content-between">
        <div class="row align-items-center">
          <div className="g-col-4">
            <ListaLivro />
          </div>
        
        </div>
      </div>
      <Rodape />
    </div>
  );
}

export default Home;
