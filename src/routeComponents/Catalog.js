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
        setProducts([...response.data])

      } catch (err) {}
    }
    fetchProducts();
  }, []);

  return (
    <div className="text-center">
    {products.map(item => (
      <ProductCardCatalog name={item.name} price={item.price} picture={item.picture} />
    ))}
    </div>
  );
}

export default Catalog;
