import { useEffect, useState } from 'react';
import React from 'react';
import api from '../apis/api';
import { Link } from 'react-router-dom';

export default function SucessPurchase(props) {
	const [stripeResponse, setStripeResponse] = useState('');

	useEffect(() => {
		localStorage.removeItem('cart');
	});

	let test =
		'' /
		useEffect(() => {
			async function fetchResponse() {
				try {
					const response = await api.post(
						`/order/success/${props.match.params.id}`
					);

					console.log(response.data);

					setStripeResponse(...response.data);
					console.log(stripeResponse);
				} catch (err) {
					console.log(err);
				}
			}
			fetchResponse();
		}, []);

	return (
		<div>
			<div class='card text-center'>
				<div class='card-header'>Order Received</div>
				<div class='card-body'>
					<h1>{stripeResponse}</h1>
					<h5 class='card-title'>You completed all steps!</h5>
					<p class='card-text'>
						With supporting text below as a natural lead-in to additional
						content.
					</p>
					<Link to='/catalog' class='btn btn-primary'>
						Go back to the catalog
					</Link>
				</div>
				<div class='card-footer text-muted'></div>
			</div>
		</div>
	);
}
