import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import api from "../apis/api";
import CardBook from "./Books/CardBook";

function ListBook() {
  const [listBook, setListBook] = useState([]);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await api.get("/api/book/list-book");

        setListBook([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchBook();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container d-flex justify-content-between">
        <div className="row">
          {listBook.map((currentBookObj) => (
            <CardBook key={currentBookObj._id} {...currentBookObj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListBook;
