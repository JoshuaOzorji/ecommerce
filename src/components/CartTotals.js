import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const CartTotals = () => {
	const { total_amount, shipping_fee } = useCartContext();
	const { myUser, loginWithRedirect } = useUserContext();
	return (
		<main className='font-noto flex justify-center md:justify-end'>
			<section>
				<div className='border inline-block p-6 mt-4 text-end gap-y-2'>
					<h5 className='text-sm md:text-lg flex justify-between'>
						Subtotal: <span>{formatPrice(total_amount)}</span>
					</h5>
					<p className='text-sm md:text-lg flex justify-between'>
						Shipping fee: <span>{formatPrice(shipping_fee)}</span>
					</p>

					<h4 className='text-base md:text-2xl font-bold border-t pt-1 mt-4 flex justify-between gap-x-4'>
						Order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
					</h4>
				</div>

				<div className='text-center font-bold mt-4 py-2'>
					{myUser ? (
						<Link
							to='/checkout'
							className='border rounded-lg border-accent py-[1px] px-3 md:py-1 md:px-4 cursor-pointer hover:text-accent font-semibold md:text-base text-sm'>
							Proceed to checkout
						</Link>
					) : (
						<button
							type='button'
							className='border rounded-lg border-accent py-[1px] px-3 md:py-1 md:px-4 cursor-pointer hover:text-accent font-semibold md:text-base text-sm'
							onClick={loginWithRedirect}>
							Login
						</button>
					)}
				</div>
			</section>
		</main>
	);
};

export default CartTotals;
