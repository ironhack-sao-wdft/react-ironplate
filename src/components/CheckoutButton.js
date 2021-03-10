import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import api from '../apis/api';
import { useState, useEffect, useContext } from 'react';

const stripePromise = loadStripe(
	'pk_test_51ISkjZJFBujY6d33pWEP9iMW8rwWp0R1tIPvoHsioySZzUYDh7xpthK17aAQe0ZO2bGM7Y0pwLOxBh0xJdT0PdGo00Ei8LgRwY'
);

export default function CheckoutButton(props) {
	const [products, setProducts] = useState(props);

	const handleClick = async (event) => {
		// Get Stripe.js instance
		const stripe = await stripePromise;

		const products = [
			{
				price_data: {
					currency: 'brl',
					product_data: {
						name: 'T-shirt',
					},
					unit_amount: 2000,
				},
				quantity: 1,
			},
		];

		const response = await api.post('/create-checkout-session', products);

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
