import React, { useContext, useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/cartContext';
import OrderSummary from '../components/OrderSummary';
import './Home.css';

export default function Cart() {
	const cartContext = useContext(CartContext);
	console.log(cartContext);

	function handleIncrement(id) {
		let productIndex = undefined;

		let findProduct = cartContext.cart.find((element, index) => {
			productIndex = index;
			return element._id === id;
		});

		if (findProduct) {
			let currentState = [...cartContext.cart];
			currentState[productIndex].quantity += 1;
			cartContext.setCart(currentState);
		}
	}

	function handleDecrement(id) {
		let productIndex = undefined;

		let findProduct = cartContext.cart.find((element, index) => {
			productIndex = index;
			return element._id === id;
		});

		console.log(findProduct);

		if (findProduct) {
			if (findProduct.quantity === 1) {
				let currentState = [...cartContext.cart];
				currentState.splice(productIndex, 1);
				cartContext.setCart(currentState);
			} else {
				let currentState = [...cartContext.cart];
				currentState[productIndex].quantity -= 1;
				cartContext.setCart(currentState);
			}
		}
	}

	return (
		<div>
			<h1 className='white'>
				<strong>My Cart</strong>
			</h1>
			<p className='white'>{cartContext.cart.length} Items</p>
			<div className='d-flex flex-row justify-content-between flex-wrap'>
				<div className='d-flex flex-column col-12 col-lg-7'>
					{cartContext.cart.length > 0 ? (
						cartContext.cart.map((element) => {
							return (
								<CartItem
									name={element.name}
									photo={element.picture}
									description={element.description}
									price={element.price}
									id={element._id}
									handleIncrement={handleIncrement}
									handleDecrement={handleDecrement}
									quantity={element.quantity}
								/>
							);
						})
					) : (
						<div class='card mb-3'>
							<div class='card-body'>Your cart is empty =[</div>
						</div>
					)}
				</div>
				<OrderSummary
					subtotal={cartContext.cart.reduce((ac, cv) => {
						return ac + cv.price * cv.quantity;
					}, 0)}
				/>
			</div>
		</div>
	);
}
