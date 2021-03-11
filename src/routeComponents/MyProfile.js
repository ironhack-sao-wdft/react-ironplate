import React from 'react';
import { AuthContext } from '../contexts/authContext';
import { useState, useEffect, useContext } from 'react';
import api from '../apis/api';
import { Link } from 'react-router-dom';

export default function MyProfile(props) {
	const authContext = useContext(AuthContext);
	console.log(authContext.loggedInUser.user._id);

	const [transactions, setTransactions] = useState([]);

	// ${authContext.loggedInUser.user._id}

	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await api.get(
					`/user/transactions/604a3dacfed1debf01845d83`
				);
				console.log(response.data.transactions);
				setTransactions([...response.data.transactions]);
			} catch (err) {}
		}
		fetchProducts();
	}, []);

	return (
		<div>
			<h1>My Orders</h1>
			<div className='list-group'>
				{transactions.map((element, index) => {
					return (
						<a
							href='#'
							className='list-group-item list-group-item-action'
							aria-current='true'
						>
							<div className='d-flex w-100 justify-content-between'>
								<h5 className='mb-1'>Pedido #{index + 1}</h5>
								{/* <small>3 days ago</small> */}
							</div>
							<p className='mb-1'>Items pedidos: </p>
							<ul className='list-group list-group-flush'>
								{element.products.map((element) => {
									return (
										<li className='list-group-item'>
											<p className='m-0'><strong>{element.name.replace(/-/g, ' ')}</strong></p>
											<p className='m-0'>Quantidade: {element.quantity}</p>
										</li>
									);
								})}
							</ul>
							<p className='mb-1'>Valor total: R${element.value.toFixed(2)}</p>
						</a>
					);
				})}
			</div>
		</div>
	);
}
