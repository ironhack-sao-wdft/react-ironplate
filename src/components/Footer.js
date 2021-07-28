import React from "react";
import "../routeComponents/Home.css";

function Footer() {
  return (
    <div>
      <hr></hr>
      <footer className="d-flex justify-content-around">
        <div className=" d-flex flex-column col-6">
          <h4 className="footer-text">
            <b>Contact us!</b>
          </h4>
          <h5 className="footer-text">(11) 98765-4321</h5>
          <h5 className="footer-text">
            Ironhack Avenue, 41 - São Paulo, Brazil
          </h5>
        </div>
        <div className="footer-icons">
          <h4 className="footer-text">
            <b>Follow us!</b>
          </h4>
          <i class="fab fa-facebook-square ml-1 mr-1"></i>
          <i class="fab fa-twitter-square ml-1 mr-1"></i>
          <i class="fab fa-instagram-square ml-1 mr-1"></i>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
