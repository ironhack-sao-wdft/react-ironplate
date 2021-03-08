import React from 'react';
import photo from '../img/Captura de tela de 2021-03-04 16-59-05.png';
import { useState, useEffect } from 'react';

function CartItem(props) {
	const [quantity, setQuantity] = useState(0);

	const [products, setProducts] = useState([]);

	function handleIncrement() {
		setQuantity(quantity + 1);
		console.log();
	}

	function handleDecrement() {
		setQuantity(quantity - 1);
	}

	return (
		<div className='card mb-3'>
			<div className='row g-0'>
				<div>
					<img
						src={photo}
						alt='jordan cries'
						style={{ width: '200px' }}
						className='rounded'
					/>
				</div>
				<div>
					<div className='card-body'>
						<h5 className='card-title'>Jordan tears</h5>
						<p className='card-text'>Short description</p>
						<p>R$250,00</p>
						<div className='d-flex flex-row align-items-center'>
							<button
								type='button'
								className='btn btn-primary rounded-circle p-0'
								onClick={handleDecrement}
								style={{ width: '20px', lineHeight: '20px' }}
							>
								-
							</button>
							<span className='ml-2 mr-2'>{quantity}</span>
							<button
								type='button'
								className='btn btn-primary rounded-circle p-0'
								onClick={handleIncrement}
								style={{ width: '20px', lineHeight: '20px' }}
							>
								+
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
