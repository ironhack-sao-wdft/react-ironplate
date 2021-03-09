import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderSummary() {
	return (
		<div className='card col-12 col-lg-4' style={{ width: '18rem' }}>
			<div className='card-body'>
				<h5 className='card-title'>
					<strong>Order summary</strong>
				</h5>
				<p className='card-text'>Subtotal:</p>
				<p className='card-text'>Taxes:</p>
				<p className='card-text'>Total price:</p>
				<Link
					type='button'
					className='btn btn-primary'
					to='/checkout'
					role='link'
				>
					Checkout
				</Link>
			</div>
		</div>
	);
}
