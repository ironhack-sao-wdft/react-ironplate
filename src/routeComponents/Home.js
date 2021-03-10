import React from "react";
import "./Home.css";
import ProductCard from "../components/ProductCard";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

function Home() {
  return (
    <div className="text-center home-bg-color">
      <div className="d-flex m-3" style={{ height: 250 }}>
        <div className="slogan-bg slogan-text ml-3 mr-3 d-flex flex-column justify-content-center align-items-center col-">
          <h3 className="general-text text-size slogan-text">
            The most peculiar online store you've ever seen
          </h3>
          <h4 className="general-text">
            Find items you didn't know you
            <br /> wished you had
          </h4>
        </div>

        <AwesomeSlider className="col-12 col-lg-6">
          <div data-src="/images/logoWrittenOrange.png" />
          <div data-src="/images/logoWrittenOrange.png" />
          <div data-src="/images/logoWrittenOrange.png" />
        </AwesomeSlider>
      </div>
      <div className="card-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Home;
