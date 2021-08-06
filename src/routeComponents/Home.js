import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faUsers,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <header
        className="text-center mt-5"
        style={{ backgroundColor: "#d8765f", color: "#fff" }}
      >
        <h1 className="p-5">Seja um Tripper você também!</h1>
        <h4 className="pt-3 pb-5">
          A plataforma de compartilhamento de dicas de viagem que você precisa
          conhecer.
        </h4>

        <Link
          className="btn btn-lg btn-outline-light m-4 mb-5"
          to="/auth/signup"
        >
          Inscreva-se!
        </Link>

        <Link
          className="btn btn-lg btn-outline-light m-4 mb-5"
          to="/auth/login"
        >
          Entrar
        </Link>
      </header>

      <section className="text-center " style={{backgroundColor: "#fffdf0"}}>   

        <div className="container">
      
        <h2 className="p-5">Aqui você pode:</h2>
          
          <section className="row">

            <>
              <div className="col m-5">
                
                <FontAwesomeIcon icon={faMapMarkedAlt} size="5x" className="mb-5" />
                <h5>Encontrar dicas dos lugares que deseja conhecer.</h5>
                
              </div>
              
              
              <div className="col m-5">

                <FontAwesomeIcon icon={faUsers} size="5x" className="mb-5" />
                <h5>Fazer perguntas e interagir com outros usuários.</h5>
                
              </div>
              

              <div className="col m-5">

                <FontAwesomeIcon icon={faMoneyBill} size="5x" className="mb-5" />
                <h5>Descubrir os gastos necessários para cada viagem.</h5>
                
              </div>

              

            </>

          </section>

          </div>

      </section>

      <section className="text-center" style={{backgroundColor: "#f2bb9c"}}>  

          <div className="container"> 
        
            <h2 className="pt-5">Como funciona:</h2>

              <section className="row">

                <>
                  <div className="col m-5">
                    
                    <p className="mb-5" style={{fontSize: "6rem", color: "#fff" }}>1</p>
                    <h5>Faça seu cadastro para poder acessar o conteúdo completo dos Trippers.</h5>
                    
                  </div>
                  
                  
                  <div className="col m-5">

                    <p className="mb-5" style={{fontSize: "6rem", color: "#fff" }}>2</p>
                    <h5>Compartilhe suas viagens com os detalhes que considera interessantes.</h5>
                    
                  </div>
                  

                  <div className="col m-5">

                    <p className="mb-5" style={{fontSize: "6rem", color: "#fff" }}>3</p>
                    <h5>Interaja com os usuários fazendo e respondendo perguntas sobre as viagens.</h5>
                    
                  </div>

                </>

              </section>
          </div>
      </section>
    </>
  );
}

export default Home;
