import React, { useEffect } from "react";
import axios from "axios";

function BookDelete(props) {
  const { id } = props.match.params;

  useEffect(() => {
    async function deleteBook() {
      try {
        await axios.delete(`http://localhost:1234/book/${id}`);
        props.history.push("/book/all");
      } catch (err) {
        console.error(err);
      }
    }
    deleteBook();
  }, [id, props.history]);

  return <div>Deleting...</div>;
}

export default BookDelete;
