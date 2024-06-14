import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartTotals from "./CartTotals";
import CartItem from "./CartItem";

const CartContent = () => {
	const { cart, clearCart } = useCartContext();
	return (
		<main className='wrapper font-noto'>
			{cart.map((item) => {
				return <CartItem key={item.id} {...item} />;
			})}

			<div className='flex justify-between mt-6 md:text-sm text-xs'>
				<Link to='/products'>
					<button className='border bg-black text-white py-1 px-2 rounded-lg'>
						Continue shopping
					</button>
				</Link>
				<button
					type='button'
					className='border bg-red-600 text-white py-1 px-2 rounded-lg'
					onClick={clearCart}>
					Clear cart
				</button>
			</div>
			<CartTotals />
		</main>
	);
};

export default CartContent;
