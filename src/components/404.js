import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <Link to="/">Back to homepage</Link>
      <div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
        <img
          src="https://i.pinimg.com/736x/64/55/2e/64552ea8642df46fc9581cff194d7037.jpg"
          alt="page not found illustration"
        />
      </div>
    </div>
  );
}

export default NoMatch;
