import React, { useState } from "react";
import api from "../../apis/bookApi";

import BookForm from "./BookForm";

function BookCreate(props) {
  const [bookState, setBookState] = useState({
    title: "",
    author: "",
    genre: "Romance",
    publisher: "",
    year: new Date().getFullYear(),
    bookCoverImage: "",
  });

  async function handleFileUpload(file) {
    try {
      const uploadData = new FormData();

      uploadData.append("bookCoverImage", file);

      const response = await api.post("/file-upload", uploadData);

      return response.data.fileUrl;
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit() {
    try {
      const uploadedImageUrl = await handleFileUpload(bookState.bookCoverImage);

      const response = await api.post(
        "/book",
        // Ao invés de enviar o objeto de state diretamente, enviamos um novo objeto, desestruturamos o state nele, e atualizamos a chave que continha o arquivo para conter a URL do arquivo que foi uploaded
        {
          ...bookState,
          bookCoverImage: uploadedImageUrl,
        }
      );

      console.log(response);

      props.history.push("/book/all");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>New Book</h1>
      <BookForm
        state={bookState}
        setState={setBookState}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default BookCreate;
