import { useState, useEffect } from "react";
import api from "../apis/api";
import BookCard from "../pages/books/BookCard";
import "../assets/styles/index.css"

function BookList() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await api.get("/list-book");

        setBookList([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchBook();
  }, []);

  return (
    <div className="container d-flex justify-content-between">
      <div className="row">
      {bookList.map((currentBookObj) => (
        <BookCard key={currentBookObj._id} {...currentBookObj} />
      ))}
      </div>
    </div>
  );
}

export default BookList;