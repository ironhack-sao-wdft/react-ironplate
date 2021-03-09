import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
	Elements,
	CardElement,
	useStripe,
	useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement),
		});

		if (!error) {
			console.log(paymentMethod);
			const { id } = paymentMethod;
			try {
				const response = await axios.post('http://localhost:1234/api/charge', {
					id,
					amount: 1099,
				});
				console.log(response);
			} catch (err) {
				console.log(err);
			}
		}
	};

	return (
		<div>
			{' '}
			<form style={{ width: '400px' }}>
				<CardElement />
				<button
					class='btn btn-primary'
					type='submit'
					disable={!stripe}
					onClick={handleSubmit}
				>
					Pay
				</button>
			</form>
		</div>
	);
};

const stripePromise = loadStripe(
	'pk_test_51ISkjZJFBujY6d33pWEP9iMW8rwWp0R1tIPvoHsioySZzUYDh7xpthK17aAQe0ZO2bGM7Y0pwLOxBh0xJdT0PdGo00Ei8LgRwY'
);

export default function Checkout() {
	return (
		<Elements stripe={stripePromise}>
			<CheckoutForm />
		</Elements>
	);
}
