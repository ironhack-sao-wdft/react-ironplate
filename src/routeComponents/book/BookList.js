import React from "react";

function BookList() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default BookList;
