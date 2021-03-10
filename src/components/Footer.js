import React from "react";
import "../routeComponents/Home.css";

function Footer() {
  return (
    <div>
      <hr></hr>
      <footer className="d-flex justify-content-around">
        <div className="general-text d-flex flex-column">
          <h4>Contact us!</h4>
          <h6>(11) 98765-4321</h6>
          <h6>Ironhack Avenue, 41 - São Paulo, Brazil</h6>
        </div>
        <div className="footer-icons">
          <h4 className="general-text">Follow us!</h4>
          <i class="fab fa-facebook-square ml-2 mr-2"></i>
          <i class="fab fa-twitter-square ml-2 mr-2"></i>
          <i class="fab fa-instagram-square ml-2 mr-2"></i>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
