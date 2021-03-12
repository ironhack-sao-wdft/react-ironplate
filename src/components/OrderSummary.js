import React, { useEffect, useState, useContext } from 'react';
import CheckoutButton from './CheckoutButton';
import { AuthContext } from '../contexts/authContext';
import { CartContext } from '../contexts/cartContext';

export default function OrderSummary(props) {
	const cartContext = useContext(CartContext);
	const authContext = useContext(AuthContext);

	return (
		<div className='card col-12 col-lg-4' style={{ width: '18rem' }}>
			<div className='card-body'>
				<h5 className='card-title'>
					<strong>Order summary</strong>
				</h5>
				<p className='card-text'>
					Total price: R${(props.subtotal / 100).toFixed(2)}
				</p>
				{!authContext.loggedInUser.user._id ? (
					<div class='alert alert-warning' role='alert'>
						You must me logged in and add Products to Checkout
					</div>
				) : (
					<CheckoutButton
						user={authContext.loggedInUser.user._id}
						total={props.subtotal}
					/>
				)}
			</div>
		</div>
	);
}
