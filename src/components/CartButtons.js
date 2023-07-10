import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { useProductsContext } from "../context/products_context";

const CartButtons = () => {
	const { total_items, clearCart } = useCartContext();
	const { loginWithRedirect, myUser, logout } = useUserContext();
	const { closeSidebar } = useProductsContext();

	return (
		<main className="flex gap-x-4">
			<Link
				to="/cart"
				className="flex items-center gap-x-1"
				onClick={closeSidebar}>
				Cart
				<span className="flex items-center relative">
					<BsCart2 />
					<span className="absolute text-[12px] top-[-14px] right-[-10px] bg-black text-white w-[6px] h-[6px] flex items-center justify-center rounded-full p-3">
						{total_items}
					</span>
				</span>
			</Link>

			{myUser ? (
				<button
					type="button"
					className=""
					onClick={() => {
						clearCart();
						localStorage.removeItem("user");
						logout({ returnTo: window.location.origin });
					}}>
					Logout
				</button>
			) : (
				<button type="button" onClick={loginWithRedirect}>
					Login
				</button>
			)}
		</main>
	);
};

export default CartButtons;
