import { useState, useEffect } from "react";
import api from "../../apis/api";
import CardLivro from "../../pages/Livros/CardLivro";


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
    <div className="container-fluid">
      <div className="row">
        <div className=" d-flex justify-content-between list">
          {listaLivro.map((currentLivroObj) => (
            <CardLivro key={currentLivroObj._id} {...currentLivroObj} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ListaLivro;
