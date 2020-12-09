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
  });

  async function handleSubmit() {
    try {
      const response = await api.post("/book", bookState);

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
