import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { PageHero, CartContent } from "../components";
import emptyCart from "../assets/img/shopping-cart.png";
const CartPage = () => {
	const { cart } = useCartContext();
	if (cart.length < 1) {
		return (
			<section className="">
				<div className="gradientGreen wrapper py-1">
					<PageHero title="Cart" />
				</div>
				<div className="wrapper font-noto flex flex-col items-center justify-center">
					<img src={emptyCart} alt="empty cart" className="md:h-72 sm:h-40" />
					<h2 className="mb-1">Your cart is empty</h2>
					<Link
						to="/products"
						className="border rounded-lg border-accent sm:py-[1px] sm:px-2 md:py-1 md:px-2 cursor-pointer hover:text-accent font-semibold md:text-sm sm:text-sm">
						Continue shopping
					</Link>
				</div>
			</section>
		);
	}
	return (
		<section>
			<div className="gradientGreen wrapper py-1">
				<PageHero title="Cart" />
			</div>

			<CartContent />
		</section>
	);
};

export default CartPage;
