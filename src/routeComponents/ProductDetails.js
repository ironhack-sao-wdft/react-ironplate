import React, { useEffect, useState, useContext } from "react";
import { Card } from "react-bootstrap";
import api from "../apis/api";
import { useParams, useHistory } from "react-router-dom";

import { CartContext } from "../contexts/cartContext";

function Catalog() {
  const [product, setProduct] = useState({});

  const cartContext = useContext(CartContext);

  console.log(cartContext);

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get(`product/${id}`);
        setProduct({ ...response.data });
        console.log(response);
      } catch (err) {}
    }
    fetchProducts();
  }, [id]);

	const handleAddToCart = () => {
		const productId = product._id;
		if (!cartContext.cart.includes(productId)) {
			cartContext.setCart([...cartContext.cart, product]);
		}
	};

	const handleBuyNow = () => {
		const productId = product._id;
		if (!cartContext.cart.includes(productId)) {
			cartContext.setCart([...cartContext.cart, product]);
		}
		history.push('/cart');
	};

  console.log(cartContext.cart);

  return (
    // <div className='text-center d-flex justify-content-center flex-wrap mt-5 row'>
    // 	<Card style={{ width: '18rem', height: '450px' }}>
    // 		<Card.Img
    // 			variant='top'
    // 			src={product.picture}
    // 			style={{ height: '170px', objectFit: 'cover' }}
    // 		/>
    // 		<Card.Body>
    // 			<Card.Title>{product.name}</Card.Title>
    // 			<Card.Text>R${product.price}</Card.Text>
    // 			<Card.Text>{product.description}</Card.Text>
    // <button onClick={handleBuyNow} className='btn btn-primary m-2'>
    // 	Buy now!
    // </button>
    // <button onClick={handleAddToCart} className='btn btn-danger m-2'>
    // 	Add to shopping cart.
    // </button>
    // 		</Card.Body>
    // 	</Card>
    // </div>
    <div className="product-detail-bg row col-12 col-lg-12">
      <img src={product.picture} className="product-detail-img" />
      <div className="d-flex flex-column justify-content-around">
        <h4>
          <b>{product.name}</b>
        </h4>
        <h6>R$ {product.price}</h6>
        <p>{product.description}</p>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <button
            onClick={handleBuyNow}
            className="btn detail-btn-orange m-1"
            style={{ width: 200 }}
          >
            Buy now!
          </button>
          <button
            onClick={handleAddToCart}
            className="btn detail-btn-blue m-1"
            style={{ width: 200 }}
          >
            Add to shopping cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
