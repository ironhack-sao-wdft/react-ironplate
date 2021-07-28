import React from 'react';
import { Link } from 'react-router-dom';
import  imagem from "./img/Canions-do-Viana-em-Bom-Jesus-Piaui.jpg"


function PostCard(props) {

  

  return (
    <div className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row g-0">

            <div className="col-md-7">
                <div className="card-body">
                    <h5 className="card-title">Usuário</h5>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Ler mais...</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="col-md-5">
                <img src={imagem} className="img-fluid rounded-start" alt="..."/>
            </div>
        </div>
    </div>
  );
};

export default PostCard;