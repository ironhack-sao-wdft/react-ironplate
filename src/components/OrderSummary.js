import React, { useEffect, useState, useContext } from 'react';
import CheckoutButton from './CheckoutButton';
import { AuthContext } from '../contexts/authContext';

export default function OrderSummary(props) {
	const authContext = useContext(AuthContext);

	let totalPrice = 40;

	return (
		<div className='card col-12 col-lg-4' style={{ width: '18rem' }}>
			<div className='card-body'>
				<h5 className='card-title'>
					<strong>Order summary</strong>
				</h5>
				<p className='card-text'>Total price: R${props.subtotal}</p>
				{!authContext.loggedInUser.user._id ? (
					<div class='alert alert-warning' role='alert'>
						You must me logged in to Checkout
					</div>
				) : (
					<CheckoutButton
						price={totalPrice}
						user={authContext.loggedInUser.user._id}
					/>
				)}
			</div>
		</div>
	);
}
