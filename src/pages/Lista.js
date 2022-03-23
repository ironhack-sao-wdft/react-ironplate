import { useState, useEffect } from "react";
import api from "../apis/api";
import CardLivro from "../pages/Livros/CardLivro";
// import index from "../assets/styles/index.css";
function ListaLivro() {
  const [listaLivro, setListaLivro] = useState([]);

  useEffect(() => {
    async function fetchLivro() {
      try {
        const response = await api.get("/lista-livro");

        setListaLivro([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchLivro();
  }, []);

  return (
   <div className="album py-sm-0 bg-light">
        <div className="container-fluid mb-2">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              
        
        {listaLivro.map((currentLivroObj) => (
          <CardLivro key={currentLivroObj._id} {...currentLivroObj} />
        ))}
      </div>
    </div>
    </div>
    </div>
    
  
  );
}
export default ListaLivro;
