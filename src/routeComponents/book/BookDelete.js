import React, { useEffect } from "react";
import api from "../../apis/bookApi";

function BookDelete(props) {
  const { id } = props.match.params;

  useEffect(() => {
    async function deleteBook() {
      try {
        await api.delete(`/book/${id}`);
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
