import React, { useState, useEffect } from "react";
import axios from "axios";

import BookForm from "./BookForm";

function BookUpdate(props) {
  const [bookState, setBookState] = useState({
    title: "",
    author: "",
    genre: "Romance",
    publisher: "",
    year: new Date().getFullYear(),
  });

  const { id } = props.match.params;

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(`http://localhost:1234/book/${id}`);
        setBookState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchBook();
  }, [id]);

  async function handleSubmit() {
    try {
      const response = await axios.patch(
        `http://localhost:1234/book/${id}`,
        bookState
      );

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
