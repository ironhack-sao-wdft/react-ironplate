import React from "react";
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import FileInput from "../../components/FileInput";

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

function BookForm(props) {
  function handleChange(event) {
    if (event.currentTarget.files) {
      return props.setState({
        ...props.state,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
    }

    props.setState({
      ...props.state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.handleSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="bookTitle"
        type="text"
        name="title"
        label="Book Title"
        value={props.state.title}
        onChange={handleChange}
      />

      <TextInput
        id="bookAuthor"
        type="text"
        name="author"
        label="Book Author"
        value={props.state.author}
        onChange={handleChange}
      />

      <SelectInput
        label="Release year"
        id="bookReleaseYear"
        name="year"
        options={generateYears()}
        value={props.state.year}
        onChange={handleChange}
      />

      <SelectInput
        label="Book genre"
        id="bookGenre"
        name="genre"
        options={genres}
        value={props.state.genre}
        onChange={handleChange}
      />

      <TextInput
        id="bookPublisher"
        type="text"
        name="publisher"
        label="Book Publisher"
        value={props.state.publisher}
        onChange={handleChange}
      />

      <FileInput
        id="bookCoverImage"
        name="bookCoverImage"
        label="Choose an Image"
        value={props.state.bookCoverImage}
        onChange={handleChange}
      />

      <div className="form-group">
        <Link className="btn btn-light mx-2" to="/book/all">
          Back
        </Link>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
}

export default BookForm;
