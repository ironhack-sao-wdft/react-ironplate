import React from "react";

export default function Footer() {
  return (
    
    <nav className="navbar fixed-bottom nav-footer nav-mae">
      <div className="navbar nav-mae d-flex justify-content-around align-items-start">
    <div className="" style={{textAlign: "left"}}>
        <h6 className="pb-2">Informações</h6>
        <p className="m-1 nav-p"> Sobre nós</p>
        <p className="m-1 nav-p">Política e Privacidade</p>
        <p className="m-1 nav-p">Termos e Condições</p>
      </div>
      <div className="align-content-around" >
      <h6 className="pb-2">Nossos projetos</h6>
      <a
        target="_blank"
        href={"https://github.com/filipefcintra"}
        className="linksTextWhite d-flex flex-row align-self-center"
      >
        <i className="fab fa-github p-2"></i>
        <p className="align-self-center m-0 nav-p">Filipe Cintra</p>
      </a>

      <a
        target="_blank"
        href={"https://github.com/kamilanitta"}
        className="linksTextWhite d-flex flex-row"
      >
        <i className="fab fa-github p-2"></i>
        <p className="align-self-center m-0 nav-p">Kamila Nitta</p>
      </a>

      <a
        target="_blank"
        href={"https://github.com/PriscilaVeras"}
        className="linksTextWhite d-flex flex-row"
      >
        <i className="fab fa-github p-2"></i>
        <p className="align-self-center m-0 nav-p">Priscila Veras</p>
      </a></div>
      <div className="" style={{textAlign: "left"}}>
        <h6 className="pb-2">Contato</h6>
        <p className="p-0 fs-6 fw-lighter nav-p">Ficamos felizes em ajudar.</p>
        <p className="p-0 fs-6 fw-lighter nav-p"><strong>E-mail:</strong> info@malaecuia.com.br</p>
      </div>
    </div>
    <div className="mini-footer fixed-bottom">2021 - Todos os direitos reservados</div>
    </nav> 
    
  );
}
