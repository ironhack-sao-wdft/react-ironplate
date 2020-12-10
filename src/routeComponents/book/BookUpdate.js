import React, { useState, useEffect } from "react";
import api from "../../apis/bookApi";

import BookForm from "./BookForm";

function BookUpdate(props) {
  const [bookState, setBookState] = useState({
    title: "",
    author: "",
    genre: "Romance",
    publisher: "",
    year: new Date().getFullYear(),
    bookCoverImage: "",
  });

  const { id } = props.match.params;

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await api.get(`/book/${id}`);
        setBookState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchBook();
  }, [id]);

  async function handleSubmit() {
    try {
      const response = await api.patch(`/book/${id}`, bookState);

      props.history.push("/book/all");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Edit Book Details</h1>
      <BookForm
        state={bookState}
        setState={setBookState}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default BookUpdate;
