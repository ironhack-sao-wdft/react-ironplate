import React from "react";
import "../assets/styles/index.css";

function Home() {
  return (
    <div className="container card">
      <div className="row p-3">
        <div className="col">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/df3hkyurq/image/upload/v1632988947/user_pictures/home_xbg6bm.jpg"
            alt="cat"
          />
        </div>
        <div className="col d-flex flex-column justify-content-around">
          <h1>One moment can change everything.</h1>
          <p>
            Have a good trip or better say good trips, good times, good company,
            good laughs, good days and good nights... May the new be present in
            your life in a special way, just as you are. And may your
            adventurous and pioneering spirit scare away any solitude. Life
            passes and another cycle of life ends, and the good moments are
            eternalized forever, whether in memory or in a simple photograph!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
