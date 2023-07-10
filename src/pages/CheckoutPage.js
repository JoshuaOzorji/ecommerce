import React from "react";
import { PageHero, StripeCheckout } from "../components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
	const { cart } = useCartContext();
	return (
		<main>
			<div className="gradientGreen wrapper py-1">
				<PageHero title="Checkout" />
			</div>

			<div className="my-6 flex justify-center items-center">
				{cart.length < 1 ? (
					<div>
						<h2>
							your cart is empty{" "}
							<Link to="/products" className="">
								fill it
							</Link>
						</h2>
					</div>
				) : (
					<div className="wrapper font-noto flex flex-col justify-center">
						<h1 className="font-bold mb-2 md:text-base sm:text-xs">
							Payment Details:{" "}
						</h1>
						<StripeCheckout />
					</div>
				)}
			</div>
		</main>
	);
};

export default CheckoutPage;
