import {useState} from 'react'
import { FormFile } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";
import axios from 'axios'
import userEvent from "@testing-library/user-event";

function CreateBook(props){

    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        synopsis: '',
        releaseYear: 0,
        genre: "Outros",
        coverImage: '',
    })
    
    const navigate = useNavigate();

    function handleChange(e){
        setBookData({...bookData, [e.target.name]: e.target.value})
    }

    
        async function handleSubmit(e) {
          e.preventDefault();
      
          try {
            const response = await axios.post("http://localhost:4000/api/book", bookData);
            console.log(response);
      
            authContext.setBookData({ ...response.data });
            localStorage.setItem(
              "loggedInUser",
              JSON.stringify({ ...response.data })
            );
            setErrors({ password: "", email: "" });
            navigate("/");
          } catch (err) {
            console.error(err.response);
            setErrors({ ...err.response.data.errors });
          }
        }





    return <form onSubmit={handleSubmit} className="container">
        <h1>Novo Livro</h1>
        <div>
        <label htmlFor="name">Nome do livro</label>
        <input
            label="Nome do livro" 
            type="text"
            id="bookFormName" 
            name="name" 
            onChange={handleChange} 
            value={bookData.name} 
            required
        />
        </div>
        
        <div>
        <label htmlFor="autor">Autor</label>
            <input
                label="Autor" 
                type="text"
                id="bookFormAutor" 
                name='Autor' 
                onChange={handleChange} 
                value={bookData.autor} 
                required
            />
        </div>

        <div>
        <label htmlFor="synopsis">Sinopse</label>
            <input
                label="Synopsis" 
                id="bookForsynopsis" 
                name='Sinopse' 
                onChange={handleChange} 
                value={bookData.sinopse} 
            />
        </div>

        <div>
        <label htmlFor="year">Ano de lançamento</label>
            <input
                type="number"
                label="Ano de lançamento" 
                id="bookForYear" 
                name='Ano de lançamento' 
                onChange={handleChange} 
                value={bookData.year} 
                required
            />

        </div>

        <div>
        <label htmlFor="genero">Genero</label>
            <input
                type="text"
                label="genre" 
                id="bookForGenre" 
                name='Genero' 
                onChange={handleChange} 
                value={bookData.genre} 
                required
            />

        </div>

        <div>
        <label htmlFor="img">Cover Image</label>
            <input
                
                label="Imagem" 
                id="bookForPicture" 
                name='pictureUrl' 
                onChange={handleChange} 
                value={bookData.pictureUrl} 
               
            />

        </div>
    </form>
}

export default CreateBook
