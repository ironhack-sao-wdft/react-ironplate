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
    <div className="text-center d-flex flex-wrap mt-5 col-12">
      {products.map((item) => (
        <ProductCardCatalog
          name={item.name}
          price={item.price}
          picture={item.picture}
          description={item.description}
          key={item._id}
        />
      ))}
    </div>
  );
}

export default Catalog;
