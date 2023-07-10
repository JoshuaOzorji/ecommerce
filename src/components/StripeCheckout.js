import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
	CardElement,
	useStripe,
	Elements,
	useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
	const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
	const { myUser } = useUserContext();
	const navigate = useNavigate();

	//STRIPE STUFF
	const [succeeded, setSucceeded] = useState(false);
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState("");
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState("");
	const stripe = useStripe();
	const elements = useElements();

	const cardStyle = {
		style: {
			base: {
				color: "#32325d",
				fontFamily: "Arial, sans-serif",
				fontSmoothing: "antialiased",
				fontSize: "16px",
				"::placeholder": {
					color: "#32325d",
				},
			},
			invalid: {
				color: "#fa755a",
				iconColor: "#fa755a",
			},
		},
	};

	const createPaymentIntent = async () => {
		try {
			const { data } = await axios.post(
				"/.netlify/functions/create-payment-intent",
				JSON.stringify({ cart, shipping_fee, total_amount }),
			);
			setClientSecret(data.clientSecret);
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		createPaymentIntent();
		//eslint-disable-next-line
	}, []);

	const handleChange = async (event) => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};
	const handleSubmit = async (ev) => {
		ev.preventDefault();
		setProcessing(true);
		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: { card: elements.getElement(CardElement) },
		});
		if (payload.error) {
			setError(`Payment failed ${payload.error.message}`);
			setProcessing(false);
		} else {
			setError(null);
			setProcessing(false);
			setSucceeded(true);
			setTimeout(() => {
				clearCart();
				navigate("/");
			}, 40000);
		}
	};

	return (
		<div className="flex flex-col border rounded-md p-4 justify-evenly md:text-sm sm:text-xs gap-y-2">
			{succeeded ? (
				<article>
					<h4>Thank you</h4>
					<h4>Your payment was successful</h4>
					<h4>Redirecting to home page shortly</h4>
				</article>
			) : (
				<article className="flex flex-col gap-y-2">
					<h4>
						Hello, <span className="font-bold">{myUser && myUser.name}</span>{" "}
					</h4>
					<p>
						Your total is:{" "}
						<span className="font-bold">
							{formatPrice(shipping_fee + total_amount)}
						</span>
					</p>
					<p className="text-accent">Test Card Number : 4242 4242 4242 4242</p>
				</article>
			)}
			<form id="payment-form" onSubmit={handleSubmit} className="">
				<CardElement
					id="card-element"
					options={cardStyle}
					onChange={handleChange}
					className="border rounded-md py-2 mt-1"
				/>
				<button
					disabled={processing || disabled || succeeded}
					id="submit"
					className="items-center md:text-base border px-2 mt-2 cursor-pointer bg-black text-white rounded-lg py-1 btn-hover">
					<span id="button-text">
						{processing ? <div className="spinner" id="spinner"></div> : "Pay"}
					</span>
				</button>
				{/* Show any error that happens when the processing the payment request */}
				{error && (
					<div className="card-error" role="alert">
						{error}
					</div>
				)}

				{/* Show a success message upon completion */}
				<p
					className={
						succeeded
							? "result-message text-green-600"
							: "result-message hidden"
					}>
					Payment completed successfully <br />
					<a href={`https://dashboard.stripe.com/test/dashboard`}>
						Check your dashboard
					</a>
				</p>
			</form>
		</div>
	);
};

const StripeCheckout = () => {
	return (
		<main className="">
			<Elements stripe={promise}>
				<CheckoutForm />
			</Elements>
		</main>
	);
};

export default StripeCheckout;
