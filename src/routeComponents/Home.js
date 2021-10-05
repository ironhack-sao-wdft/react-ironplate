import React from "react";
import "../assets/styles/index.css";
import { AuthContext } from "../contexts/authContext";
import {useContext} from "react"
import { useHistory } from "react-router-dom";

function Home() {

  const { loggedInUser } = useContext(AuthContext);
  const history = useHistory(); 
  console.log(loggedInUser.user._id)
  
  return (
    <>{loggedInUser.user._id ? <>{history.push("/book/all")}</> : <div className="container card">
    <div className="row p-3 d-flex justify-content-around flex-wrap">
      <div className="col p-0">
        <img
          className="img-fluid rounded"
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
  </div>}</>

    
  );
}

export default Home;
