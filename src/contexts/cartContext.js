import React, { useState, createContext, useEffect } from 'react';

const CartContext = createContext([{ products: [] }]);

function CartContextComponent(props) {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const storedCart = localStorage.getItem('cart');

		const parsedStoredCart = JSON.parse(storedCart || '""');

		if (parsedStoredCart.user) {
			setCart({ ...parsedStoredCart });
		}
	}, []);

	useEffect(() => {
		if (cart.length) {
			localStorage.setItem('cart', JSON.stringify(cart));
		}

		// localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart]);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{props.children}
		</CartContext.Provider>
	);
}

export { CartContextComponent, CartContext };
