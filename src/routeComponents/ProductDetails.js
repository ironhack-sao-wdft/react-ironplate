import React, { useEffect, useState, useContext } from "react";
import { Card } from "react-bootstrap";
import api from "../apis/api";
import { useParams, useHistory } from "react-router-dom";

import { CartContext } from "../contexts/cartContext";

function Catalog() {
  const [product, setProduct] = useState({});

  const cartContext = useContext(CartContext);

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get(`product/${id}`);
        setProduct({ ...response.data });
      } catch (err) {}
    }
    fetchProducts();
  }, [id]);

  const handleAddToCart = () => {
    const productId = product._id;
    if (!cartContext.cart.includes(productId)){
    cartContext.setCart([...cartContext.cart, productId ]);
    }
  }

  const handleBuyNow = () => {
    const productId = product._id;
    if (!cartContext.cart.includes(productId)){
    cartContext.setCart([...cartContext.cart, productId]);
    }
    history.push("/cart");
  }
 
  console.log(cartContext.cart);

  return (
    <div className="text-center d-flex justify-content-center flex-wrap mt-5 row">
     <Card style={{ width: "18rem", height: "450px" }}>
        <Card.Img
          variant="top"
          src={product.picture}
          style={{ height: "170px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>R${product.price}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <button onClick={handleBuyNow} className="btn btn-primary m-2">Buy now!</button>
          <button onClick={handleAddToCart} className="btn btn-danger m-2">Add to shopping cart.</button>
        </Card.Body>        
      </Card>
    </div>
  );
}

export default Catalog;
