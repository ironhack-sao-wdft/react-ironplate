import React, { useEffect, useState, useContext } from 'react';
import { Card } from 'react-bootstrap';
import api from '../apis/api';
import { useParams, useHistory } from 'react-router-dom';

import { CartContext } from '../contexts/cartContext';

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
	}, []);

	const handleAddToCart = () => {
		let productIndex = undefined;

		let findProduct = cartContext.cart.find((element, index) => {
			productIndex = index;
			return element._id === id;
		});

		if (!findProduct) {
			cartContext.setCart([...cartContext.cart, product]);
		} else {
			let currentState = [...cartContext.cart];
			currentState[productIndex].quantity += 1;
			cartContext.setCart(currentState);
		}
		history.push('/catalog');
	};

	const handleBuyNow = () => {
		let productIndex = undefined;

		let findProduct = cartContext.cart.find((element, index) => {
			productIndex = index;
			return element._id === id;
		});

		if (!findProduct) {
			cartContext.setCart([...cartContext.cart, product]);
		} else {
			let currentState = [...cartContext.cart];
			currentState[productIndex].quantity += 1;
			cartContext.setCart(currentState);
		}
		history.push('/cart');
	};

	return (
		<div className='product-detail-bg row col-12 col-lg-12 d-flex justify-content-around'>
			<img src={product.picture} className='product-detail-img' />
			<div
				className='d-flex flex-column justify-content-around'
				style={{ width: 400 }}
			>
				<h4>
					<b>{product.name}</b>
				</h4>
				<h6>R$ {product.price > 0 ? (product.price / 100).toFixed(2) : ''}</h6>
				<p>{product.description}</p>
				<div className='d-flex flex-column justify-content-center align-items-start'>
					<button
						onClick={handleBuyNow}
						className='btn detail-btn-orange m-1'
						style={{ width: 250 }}
					>
						Buy now!
					</button>
					<button
						onClick={handleAddToCart}
						className='btn detail-btn-blue m-1'
						style={{ width: 250 }}
					>
						Add to shopping cart
					</button>
				</div>
			</div>
		</div>
	);
}

export default Catalog;
