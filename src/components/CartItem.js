import React from 'react';

function CartItem(props) {
	return (
		<div className='card mb-3'>
			<div className='d-flex g-0 w-100 p-3 flex-wrap'>
				<div className='d-flex justify-content-center align-items-center'>
					<img
						src={props.photo}
						alt='jordan cries'
						style={{ width: '150px', height: '150px' }}
						className='rounded '
					/>
				</div>
				<div>
					<div className='card-body'>
						<h5 className='card-title'>{props.name}</h5>
						<p className='card-text'>{props.description}</p>
						<p>{'R$'+(props.price * props.quantity).toFixed(2)}</p>
						<div className='d-flex flex-row align-items-center'>
							<button
								type='button'
								className='btn btn-primary rounded-circle p-0'
								onClick={() => props.handleDecrement(props.id)}
								style={{ width: '20px', lineHeight: '20px' }}
							>
								-
							</button>
							<span className='ml-2 mr-2'>{props.quantity}</span>
							<button
								type='button'
								className='btn btn-primary rounded-circle p-0'
								onClick={() => props.handleIncrement(props.id)}
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
