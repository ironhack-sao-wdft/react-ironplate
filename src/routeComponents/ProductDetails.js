import React, { useEffect, useState } from "react";
import api from "../apis/api";
import { useParams } from "react-router-dom";

import ProductCardCatalog from "../components/ProductCardCatalog";

function Catalog() {

    const [product, setProduct] = useState({});
  
    const { id } = useParams();

  useEffect(() => {
    async function fetchProducts() {
      try {
          console.log("hey");
        const response = await api.get(`product/${id}`);
        console.log(response);
        setProduct({...response.data});
      } catch (err) {}
    }
    fetchProducts();
  }, [id]);

  return (
    <div className="text-center d-flex flex-wrap mt-5 col-12">
        <ProductCardCatalog
          name={product.name}
          price={product.price}
          picture={product.picture}
          description={product.description}
          key={product._id}
        />
    </div>
  );
}

export default Catalog;
