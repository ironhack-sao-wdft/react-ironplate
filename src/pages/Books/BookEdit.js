import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../apis/api";


function BookEdit(props) {
  const [userData, setUserData] = useState({
    title: "",
    author: "",
    synopsis: "",
    year: "",
    genre: "",
    picture: new File([], ""),
    pictures: "",
  });

  // Loading
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function user() {
      try {
        const response = await api.get(`/book/${id}`);
                  const pictures = await handleFileUpload(userData.picture);
 
        setUserData({ ...userData,
            pictures,
           ...response.data });
      } catch (e) {
        console.log(e);
      }
    }
    user();
  }, [id]);

  function handleChange(e) {
    if (e.target.files) {
      return setUserData({
        ...userData,
        [e.target.name]: e.target.files[0],
      });
    }
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

async function handleFileUpload(file) {
  try {
    const uploadData = new FormData();

    uploadData.append("picture", file);

    const response = await api.post("/upload", uploadData);

    console.log(response);

    return response.data.url;
  } catch (err) {
    console.error(err);
  }
}


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
            const pictures = await handleFileUpload(userData.picture);

      const response = await api.patch(`/update/${id}`,
       userData,
       pictures
       );

      console.log(response);

      setLoading(false);

      navigate("/");
    } catch (err) {
      setLoading(false);
      console.error(err);
      if (err.response) {
        console.error(err.response);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="container" className="form-label">
        <h1>Editar Livro</h1>
        <div>
        <label htmlFor="title">Titulo do livro</label>
        <input
            className="form-control"
            label="Titulo do livro" 
            type="text"
            id="bookFormTitle" 
            name="title" 
            onChange={handleChange} 
            value={userData.title} 
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
                value={userData.author} 
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
                value={userData.synopsis} 
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
                value={userData.year} 
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
                value={userData.genre} 
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
        <Link to="/" disabled={loading} type="submit" className="btn btn-primary" >
        {loading ? ( <> <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> <span>Carregando</span> {" "}
        </> 

        ):( 
        
            "Enviar"
        )}
            
            </Link> 
        <br></br>
        
      </div>


    </form>
  );
}

export default BookEdit;