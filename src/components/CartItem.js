import React from 'react';
import photo from '../img/Captura de tela de 2021-03-04 16-59-05.png';
import { useState, useEffect } from 'react';

function CartItem(props) {
	const [state, setState] = useState({
		price: '',
		quantity: 2
	});

	function handleIncrement() {
		setState(state.quantity);
	}

	function handleDecrement() {
		setState(state.quantity - 1);
	}

	return (
		<div className='card mb-3  col-lg-6' style={{ maxWidth: '540px;' }}>
			<div className='row g-0'>
				<div className='col-md-4'>
					<img
						src={photo}
						alt='jordan cries'
						style={{ width: '200px' }}
						className='rounded'
					/>
				</div>
				<div className='col-md-8'>
					<div className='card-body'>
						<h5 className='card-title'>Jordan tears</h5>
						<p className='card-text'>Short description</p>
						<p>R$250,00</p>
						<button
							type='button'
							className='btn btn-primary rounded-circle'
							onClick={handleDecrement}
							style={{ width: '15px', heigth: '15px', lineHeight: '100%' }}
						>
							-
						</button>
						<span>{state.quantity}</span>
						<button
							type='button'
							className='btn btn-primary rounded-circle'
							onClick={handleIncrement}
							style={{ width: '15px', heigth: '10px', lineHeight: '100%' }}
						>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
