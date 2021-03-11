import React from 'react';
import { Link } from 'react-router-dom';

export default function CanceledPurchase() {
	return (
		<div className='alert alert-danger' role='alert'>
			<h4 className='alert-heading'>Something went wrong =[</h4>
			<br />
			<p>
				Sorry something went wrong loading your page, please wait a few minutes
				before attempting again.
			</p>
			<hr />
			<p className='mb-0'>
				We're working on getting this fixed as soon as we can
			</p>
			<br />
			<Link to='/cart' type='button' class='btn btn-primary'>
				Go back to the Cart
			</Link>
		</div>
	);
}
