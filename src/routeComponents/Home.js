import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <p>This is the homepage</p>
      <div className="d-flex flex-column align-items-center">
        <Link to="/book/all">See the books</Link>

        <Link className="btn btn-lg btn-primary" to="/auth/signup">
          Signup here!
        </Link>
      </div>
    </div>
  );
}

export default Home;
