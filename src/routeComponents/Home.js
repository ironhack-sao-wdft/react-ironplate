import React, { useEffect, useState } from "react";
import api from "../apis/api";
import "./Home.css";
import ProductCard from "../components/ProductCard";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Footer from "../components/Footer";

function Home() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       const response = await api.get("/product/number/3");
  //       console.log(response);
  //       setProducts([...response.data]);
  //     } catch (err) {}
  //   }
  //   fetchProducts();
  // }, []);

  // useEffect({});
  return (
    <div className="text-center home-bg-color">
      <div className="d-flex flex-wrap m-3 slogan-carousel-size ">
        <div className="slogan-bg slogan-text d-flex flex-column flex-wrap justify-content-center align-items-center col-12 col-md-6">
          <h3 className="text-size slogan-text d-flex flex-wrap">
            The most peculiar online store you've ever seen
          </h3>
          <h4 className="slogan-2-text d-flex flex-wrap">
            Find items you didn't know you
            <br /> wished you had
          </h4>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center mb-5">
          <AwesomeSlider style={{ height: "40vh" }}>
            <div data-src="/images/logoWrittenOrange.png" />
            <div data-src="/images/logoWrittenOrange.png" />
            <div data-src="/images/logoWrittenOrange.png" />
          </AwesomeSlider>
          {/* <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="/images/logoWrittenOrange.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="/images/logoWrittenOrange.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="/images/logoWrittenOrange.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div> */}
        </div>
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
