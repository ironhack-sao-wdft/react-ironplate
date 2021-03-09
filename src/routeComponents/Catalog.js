import React, { useEffect, useState } from "react";
import api from "../apis/api";

import ProductCardCatalog from "../components/ProductCardCatalog";

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get("/product");
        console.log(response);
        setProducts([...response.data]);
      } catch (err) {}
    }
    fetchProducts();
  }, []);

  return (
    <div className="text-center d-flex align-items-center justify-content-center flex-wrap col-12">
      {products.map((item) => (
        <div key={item._id}>
        <ProductCardCatalog
          name={item.name}
          price={item.price}
          picture={item.picture}
          description={item.description}         
          id={item._id}
        />
        </div>
      ))}
    </div>
  );
}

export default Catalog;
