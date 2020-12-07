import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <p>This is the homepage</p>
      <Link to="/book/all">See the books</Link>
    </div>
  );
}

export default Home;
