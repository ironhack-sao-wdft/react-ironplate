import React, { useState } from "react";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import axios from "axios";

const genres = [
  "Romance",
  "Poetry",
  "Biography",
  "Horror",
  "Sci-fi",
  "Fantasy",
];

function generateYears() {
  // const years = [];
  const min = 1900;
  const max = new Date().getFullYear();

  // for (let i = min; i <= max; i++) {
  //   years.push(i);
  // }

  return [...new Array(max - min)].map((el, i) => i + 1 + min);

  // return years;
}

function BookForm() {
  const [bookState, setBookState] = useState({
    title: "",
    author: "",
    genre: "",
    publisher: "",
    year: new Date().getFullYear(),
  });

  function handleChange(event) {
    setBookState({
      ...bookState,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:1234/book",
        bookState
      );

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Book</h1>

      <TextInput
        id="bookTitle"
        type="text"
        name="title"
        label="Book Title"
        value={bookState.title}
        onChange={handleChange}
      />

      <TextInput
        id="bookAuthor"
        type="text"
        name="author"
        label="Book Author"
        value={bookState.author}
        onChange={handleChange}
      />

      <SelectInput
        label="Release year"
        id="bookReleaseYear"
        name="year"
        options={generateYears()}
        value={bookState.year}
        onChange={handleChange}
      />

      <SelectInput
        label="Book genre"
        id="bookGenre"
        name="genre"
        options={genres}
        value={bookState.genre}
        onChange={handleChange}
      />

      <TextInput
        id="bookPublisher"
        type="text"
        name="publisher"
        label="Book Publisher"
        value={bookState.publisher}
        onChange={handleChange}
      />

      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
}

export default BookForm;
