import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import api from '../apis/api';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import { CartContext } from '../contexts/cartContext';

const stripePromise = loadStripe(
	'pk_test_51ISkjZJFBujY6d33pWEP9iMW8rwWp0R1tIPvoHsioySZzUYDh7xpthK17aAQe0ZO2bGM7Y0pwLOxBh0xJdT0PdGo00Ei8LgRwY'
);

export default function CheckoutButton(props) {
	const authContext = useContext(AuthContext);
	console.log(authContext);

	const cartContext = useContext(CartContext);
	console.log(cartContext);

	// let itemsToStripe = [];


	let itemsToStripe = {
		products: [],
		id: authContext.loggedInUser.user._id
	};

	for (let i = 0; i < cartContext.cart.length; i++) {
		itemsToStripe.products.push({
			price_data: {
				currency: 'brl',
				product_data: {
					name: cartContext.cart[i].name,
				},
				unit_amount: cartContext.cart[i].price,
			},
			quantity: cartContext.cart[i].quantity,
		});
	}

	console.log(itemsToStripe);

	const handleClick = async (event) => {
		const stripe = await stripePromise;

		const response = await api.post('/create-checkout-session', itemsToStripe);

		const result = await stripe.redirectToCheckout({
			sessionId: response.data.id,
		});

		if (result.error) {
		}
	};

	return (
		<div>
			<button
				type='button'
				class='btn btn-primary'
				role='link'
				onClick={handleClick}
			>
				Checkout
			</button>
		</div>
	);
}
