import React from "react";

function InternalServerError() {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd43o4s3SOqu7ilYRkGBj3AALSLnh0jOwrZg&usqp=CAU"
        alt="internal server error"
      />
      <button
        className="btn btn-warning"
        onClick={() => window.location.reload()}
      >
        Reload the page
      </button>
    </div>
  );
}

export default InternalServerError;
