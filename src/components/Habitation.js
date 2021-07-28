import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export default class Habitation extends Component{
state={
    habitation:[],
}

render(){ 
    return(
        <div>
          
             <Link to="{`/habitation/${moradia.id}`}">
             <img src=""/>
             <h5>titulo</h5>
             <p>descricao ou bairro ou cidade</p>
             <p>preço</p>

            </Link>
            <div>
            
            </div>
        </div>

        
    )
}

}