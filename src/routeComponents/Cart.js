import React, { useContext, useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/cartContext';
import api from '../apis/api';
import OrderSummary from '../components/OrderSummary';

export default function Cart() {
	const [cart, setCart] = useState([]);

	const cartContext = useContext(CartContext);

	useEffect(() => {
		async function fetchMyCart() {
			try {
				for (let i = 0; i <= cartContext.cart.length; i++) {
					let response = await api.get(`product/${cartContext.cart[i]}`);
					console.log(response.data);
					setCart((cart) => [...cart, response.data]);
				}
			} catch (err) {
				console.log(err);
			}
		}
		fetchMyCart();
	}, []);

	console.log(cart)

	return (
		<div className='d-flex flex-column'>
			<h1>
				<strong>My Cart</strong>
			</h1>
			<p>{cart.length} Items</p>
			<div className='d-flex flex-row justify-content-between flex-wrap'>
				<div className='d-flex flex-column col-12 col-lg-7'>
					{cart.length > 0 ? (
						cart.map((element) => {
							return (
								<CartItem
									name={element.name}
									photo={element.picture}
									description={element.description}
									price={element.price}
								/>
							);
						})
					) : (
						<div className='card'>Your cart is empty =[</div>
					)}
				</div>
				<OrderSummary />
			</div>
		</div>
	);
}
