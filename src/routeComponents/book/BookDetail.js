import React, { useEffect, useState } from "react";
import axios from "axios";

function BookDetail(props) {
  // 1. Extrair o id do livro atual da URL
  const { id } = props.match.params;

  // 3. Definir o state no formato do Model no backend
  const [book, setBook] = useState({
    title: "",
    author: "",
    year: null,
    genre: "",
    publisher: "",
  });

  useEffect(() => {
    async function fetchBooks() {
      // 2. Buscar os detalhes do livro no nosso servidor (backend)
      try {
        const response = await axios.get(`http://localhost:1234/book/${id}`);
        console.log(response);
        setBook({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchBooks();
  }, [id]);

  // 4. "Encaixar" o state no JSX a ser renderizado pelo componente
  return (
    <div>
      <h1>Book Details</h1>
      <p>
        <strong>Title: </strong>
        {book.title}
      </p>
      <p>
        <strong>Author: </strong>
        {book.author}
      </p>
      <p>
        <strong>Release Year: </strong>
        {book.year}
      </p>
      <p>
        <strong>Genre: </strong>
        {book.genre}
      </p>
      <p>
        <strong>Publisher: </strong>
        {book.publisher}
      </p>
    </div>
  );
}

export default BookDetail;
