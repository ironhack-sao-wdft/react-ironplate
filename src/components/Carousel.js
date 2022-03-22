import backgroundcard from "../assets/img/backgroundcard.png";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide m-4 shadow-lg p-1 mb-5"
      data-bs-ride="carousel"
      data-bs-interval="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={backgroundcard} className="w-100" alt="..." />
          <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center">
            <h1>
              welcome to{" "}
              <span style={{ fontFamily: "Arima Madurai, cursive" }}>
                PAUSE
              </span>
            </h1>
            <p className="p-5">
              we are here to help you to take a moment for yourself.
            </p>
            <button
              data-bs-slide="next"
              data-bs-target="#carouselExampleCaptions"
              type="button"
              className="btn btn-light btn-lg"
            >
              next
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={backgroundcard} className="w-100" alt="..." />
          <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center">
            <p className="pb-5">
              no matter if you are at home or outdoors, we always have a
              suggestion for you.
            </p>
            <button
              type="button"
              className="btn btn-light btn-lg"
              data-bs-slide="next"
              data-bs-target="#carouselExampleCaptions"
            >
              let's start
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={backgroundcard} className="w-100" alt="..." />
          <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center">
            <h2 className="p-3">where do you want to start?</h2>
            <Link to="/signup">
              <button type="button" className="btn btn-light p-3">
                Create a new account
              </button>
            </Link>
            <p className="pt-3">or</p>
            <Link to="/login">
              <button type="button" className="btn btn-light p-3">
                Login an existing account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
