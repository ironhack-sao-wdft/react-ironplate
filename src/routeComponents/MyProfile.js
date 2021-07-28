import React from 'react';
import { AuthContext } from '../contexts/authContext';
import { useState, useEffect, useContext } from 'react';
import api from '../apis/api';
import { Link } from 'react-router-dom';

export default function MyProfile(props) {
	const authContext = useContext(AuthContext);

	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await api.get(
					`/user/transactions/${authContext.loggedInUser.user._id}`
				);
				setTransactions([...response.data.transactions]);
			} catch (err) {}
		}
		fetchProducts();
	}, []);

	console.log(transactions);

	return (
		<div>
			<h1 className='white'>
				<strong>Welcome, {authContext.loggedInUser.user.name} =]</strong>
			</h1>
			<div className='list-group white'>
				<h4>Here, you can see your orders</h4>
				{transactions.length ? (
					transactions.map((element, index) => {
						return (
							<a
								href='#'
								className='list-group-item list-group-item-action'
								aria-current='true'
							>
								<div className='d-flex w-100 justify-content-between'>
									<h5 className='mb-1'>Order #{index + 1}</h5>
								</div>
								<p className='mb-1'>Items: </p>
								<ul className='list-group list-group-flush'>
									{element.products.map((element) => {
										return (
											<li className='list-group-item'>
												<p className='m-0'>
													<strong>
														{element.item.name.replace(/-/g, ' ')}
													</strong>
												</p>
												<p className='m-0'>Quantity: {element.quantity}</p>
											</li>
										);
									})}
								</ul>
								<p className='mb-1'>
									Total value: R${(element.value / 100).toFixed(2)}
								</p>
							</a>
						);
					})
				) : (
					<div class='card'>
						<div class='card-body'>You have no orders yet.</div>
					</div>
				)}
			</div>
		</div>
	);
}
