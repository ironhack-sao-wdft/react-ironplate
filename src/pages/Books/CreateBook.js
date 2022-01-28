import {useState} from 'react'
import api from '../../apis/api'
import { useNavigate } from 'react-router-dom';

function CreateBook(){

    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        synopsis: "",
        year: 0,
        genre: "",
        picture: new File ([], ""),
        pictures: "",
    });

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    function handleChange(e){
        
        if(e.target.files) {
            return setBookData({...bookData, [e.target.name]: e.target.files[0],})
        }
        
        setBookData({ ...bookData, [e.target.name]: e.target.value });}
        

//picture = newfile
    async function handleFileUpload(file) {
        try {

            const uploadData = new FormData()

            uploadData.append('picture', file)

            const response = await api.post('/upload', uploadData)

            console.log(response)

            return response.data.url

        } catch (err) {
            console.error(err)
        }
    }    
    
    async function handleSubmit(e) {
        
        e.preventDefault();
        
        try {
            setLoading(true);

            const pictures = await handleFileUpload(bookData.picture)
            const response = await api.post("/book", { ...bookData, pictures})
            
            console.log(response)
            setLoading(false)
            navigate("/")
        } catch (err) {
            console.error(err)
            setLoading(false)
        }
    }
      

    return (
    <form onSubmit={handleSubmit} className="container" className="form-label">
        <h1>Novo Livro</h1>
        <div>
        <label htmlFor="title">Titulo do livro</label>
        <input
            className="form-control"
            label="Titulo do livro" 
            type="text"
            id="bookFormTitle" 
            name="title" 
            onChange={handleChange} 
            value={bookData.title} 
            required
            readOnly={loading}
        />
        </div>
        
        <div>
        <label htmlFor="author">Autor</label>
            <input
                className="form-control"
                label="author" 
                type="text"
                id="bookFormAuthor" 
                name='author' 
                onChange={handleChange} 
                value={bookData.author} 
                required
                readOnly={loading}
            />
        </div>

        <div>
        <label htmlFor="synopsis">Sinopse</label>
            <input
                className="form-control"
                label="synopsis" 
                id="bookFormSynopsis" 
                name='synopsis' 
                onChange={handleChange} 
                value={bookData.synopsis} 
                readOnly={loading}
            />
        </div>

        <div>
        <label htmlFor="year">Ano de lançamento</label>
            <input
                className="form-control"
                type="number"
                label="year" 
                id="bookFormYear" 
                name='year' 
                onChange={handleChange} 
                value={bookData.year} 
                required
                readOnly={loading}
            />

        </div>

        <div>
        <label htmlFor="genre">Genero</label>
            <input
                className="form-control"
                type="text"
                label="genre" 
                id="bookFormGenre" 
                name='genre' 
                onChange={handleChange} 
                value={bookData.genre} 
                required
                readOnly={loading}
            />

        </div>

        <div>
        <label htmlFor="pictures">Capa</label>
            <input
                className="form-control"
                label="Imagem"
                type="file"
                id="bookFormPicture" 
                name='picture' 
                onChange={handleChange} 
                readOnly={loading}
            />

        </div>
        <br></br>
        <div>
        <button to="/" disabled={loading} type="submit" className="btn btn-primary" >
        {loading ? ( <> <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> <span>Carregando</span> {" "}
        </> 

        ):( 
        
            "Enviar"
        )}
            
            </button> 
        <br></br>
        
      </div>


    </form>)
}

export default CreateBook
