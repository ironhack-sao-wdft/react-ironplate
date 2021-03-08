import React from "react";
import "./Home.css";
import ProductCard from "../components/ProductCard";
// import Carrossel from "../components/Carrossel";

function Home() {
  return (
    <div className="text-center home-bg-color">
      <div className="slogan-text">
        <h3 className="text-size">The most</h3>
        <h3 className="text-size">
          <i> peculiar </i>
        </h3>
        <h3 className="text-size">online store you've ever seen</h3>
      </div>
      <h4 className="slogan-text">
        Find items you didn't know you wished you had
      </h4>
      <div>
        <h3>CARROSSEL{/* <Carrossel /> */}</h3>
      </div>
      <div className="card-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Home;
