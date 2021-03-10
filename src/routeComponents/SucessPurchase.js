import { useEffect } from 'react';
import React from 'react';

export default function SucessPurchase() {
	useEffect(() => {
		localStorage.removeItem('cart');
	});

	return <div></div>;
}
