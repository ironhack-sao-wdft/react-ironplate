import React, { Component } from "react";
import axios from "axios";


export default class Habitation extends Component{
state={
    title:"",
    description:"",
    price:0,
    photo:"",
    type:"",
}

handleChange=(event)=>{
    this.setState({[event.target.name]: event.target.value})
    console.log();
}

handleFormSubmit = async (event)=>{
    event.preventDefault()
    const response = await axios.post(
        "wwww"
        //this.state
    );
console.log(response)

this.setState({
    imagem:"",
    título:"",
    descrição:"",
    preço:0,
    quartos:0,
})

}


render(){
    return(
    <div className="m-5">
        <h1 className="m-5">Seu anúncio</h1>        
        <div className="m-5">
            <label HTMLform="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="m-5">
            <label HTMLform="exampleFormControlTextarea1" className="form-label">Descrição</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="m-5">
            <label HTMLform="number" className="form-label">Preço</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="m-5">
            <label HTMLfor="formFile" class="form-label">Subir uma imagem</label>
        <input class="form-control" type="file" id="formFile"/>
        </div>
        <select className="mx-5" aria-label="Default select example">
            <option selected>Categoria</option>
            <option value="1">Apartamento</option>
            <option value="2">Casa</option>
            <option value="3">Quarto</option>
        </select>
        <select className="mx-5" aria-label="Default select example">
            <option selected>Quartos</option>
            <option value="1">Estúdio</option>
            <option value="2">1</option>
            <option value="3">2</option>
            <option value="4">3</option>
            <option value="5">4</option>
        </select>
        <div className="m-5">
            <label HTMLform="exampleFormControlTextarea1" className="form-label">Email</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="m-5">
            <label HTMLform="exampleFormControlTextarea1" className="form-label">Telefone</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="m-5">
            <label HTMLform="exampleFormControlTextarea1" className="form-label">Website</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div>   
    )
}
}