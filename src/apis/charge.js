import Stripe from 'stripe';
const stripe = new Stripe(
	'pk_test_51ISkjZJFBujY6d33pWEP9iMW8rwWp0R1tIPvoHsioySZzUYDh7xpthK17aAQe0ZO2bGM7Y0pwLOxBh0xJdT0PdGo00Ei8LgRwY'
);

export default async (req, res) => {
	const { id, amount } = req.body;

	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: 'USD',
			description: 'Something',
			payment_method: id,
			confirm: true,
		});

		console.log(payment);

		return res.status(200).json({ confirm: 'abc123' });
	} catch (err) {
		console.log(err);
	}
};
