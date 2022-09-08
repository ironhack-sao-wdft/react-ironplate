import React, { useEffect, useState } from "react";
import api from "../apis/api";
import "./Home.css";
import ProductCard from "../components/ProductCard";
import "react-awesome-slider/dist/styles.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get("/product/number/3");
        console.log(response);
        setProducts([...response.data]);
      } catch (err) {}
    }
    fetchProducts();
  }, []);

  return (
    <div className="text-center home-bg-color">
      <div className="d-flex flex-wrap m-3 slogan-carousel-size ">
        <div className="slogan-bg slogan-text d-flex flex-column flex-wrap justify-content-center align-items-center col-12 col-md-6 p-4">
          <h3 className="text-size slogan-text d-flex flex-wrap">
            The most peculiar online store you've ever seen
          </h3>
          <h4 className="slogan-2-text d-flex flex-wrap mt-3">
            Find items you didn't know you wished you had
          </h4>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center mb-5">
          <Link to="/catalog">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/launch-sale.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/new-products.png"
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Link>
        </div>
      </div>
      <div className="card-center">
        {products.map((element) => (
          <ProductCard state={element} />
        ))}
      </div>
    </div>
  );
}

export default Home;
