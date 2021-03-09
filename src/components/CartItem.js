import React from 'react';
import photo from '../img/Captura de tela de 2021-03-04 16-59-05.png';
import { useState, useEffect, useContext } from 'react';

import { CartContext } from "../contexts/cartContext";


function CartItem(props) {
	const [quantity, setQuantity] = useState(1);

	const [products, setProducts] = useState([]);

	const cartContext = useContext(CartContext);

	function handleIncrement() {
		setQuantity(quantity + 1);
		console.log();
	}

	function handleDecrement() {
		if (quantity > 0){
		setQuantity(quantity - 1);
		}
	}

	console.log(cartContext.cart);

	return (
		<div className='card mb-3'>
			<div className='d-flex g-0 w-100 p-3 flex-wrap'>
				<div className='d-flex justify-content-center align-items-center'>
					<img
						src={photo}
						alt='jordan cries'
						style={{ width: '150px', height: '150px' }}
						className='rounded '
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
