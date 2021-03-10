import React, { useEffect, useState, useContext } from 'react';
import CheckoutButton from './CheckoutButton';

export default function OrderSummary(props) {
	const [finalSelection, setFinalSelection] = useState([]);

	return (
		<div className='card col-12 col-lg-4' style={{ width: '18rem' }}>
			<div className='card-body'>
				<h5 className='card-title'>
					<strong>Order summary</strong>
				</h5>
				<p className='card-text'>Subtotal: {props.subtotal}</p>
				<p className='card-text'>Taxes:</p>
				<p className='card-text'>Total price:</p>
				<CheckoutButton />
			</div>
		</div>
	);
}
