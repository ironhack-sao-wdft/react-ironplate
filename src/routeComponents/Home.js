import React from "react";
import "./Home.css";
import ProductCard from "../components/ProductCard";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="text-center home-bg-color">
      <div className="d-flex flex-wrap m-3 slogan-carousel-size ">
        <div className="slogan-bg slogan-text d-flex flex-column flex-wrap justify-content-center align-items-center col-6">
          <h3 className="text-size slogan-text d-flex flex-wrap">
            The most peculiar online store you've ever seen
          </h3>
          <h4 className="slogan-2-text d-flex flex-wrap">
            Find items you didn't know you
            <br /> wished you had
          </h4>
        </div>
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <AwesomeSlider style={{ height: "40vh" }}>
            <div data-src="/images/logoWrittenOrange.png" className="m-5" />
            <div data-src="/images/logoWrittenOrange.png" />
            <div data-src="/images/logoWrittenOrange.png" />
          </AwesomeSlider>
        </div>
      </div>
      <div className="card-center mt-5 mb-5">
        <ProductCard className="card-individual" />
        <ProductCard />
        <ProductCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
