import React from "react";
import logo from "../assets/img/logo-black.svg";
import { links } from "../utils/constants";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";

const Navbar = () => {
	const { openSidebar } = useProductsContext();
	const { myUser } = useUserContext();

	return (
		<nav className='flex items-center justify-between wrapper py-2 md:py-4 font-abel font-semibold text-lg'>
			<div className='w-full flex items-center justify-between'>
				<div className='flex items-center justify-between'>
					<Link to='/'>
						<img src={logo} alt='logo' className='delay-150 w-12 h-12' />
					</Link>

					<ul className='hidden md:flex justify-center'>
						{links.map((link) => {
							const { id, text, url } = link;
							return (
								<li key={id} className='mx-2'>
									<Link to={url}>{text}</Link>
								</li>
							);
						})}

						<div className='hidden md:flex gap-x-2'>
							{myUser && (
								<li>
									<Link to='/checkout'>Checkout</Link>
								</li>
							)}
						</div>
					</ul>
				</div>

				<div className=''>
					<button
						type='button'
						onClick={openSidebar}
						className='md:hidden visible cursor-pointer bg-white'>
						<HiMenuAlt3 className='h-8 w-8' />
					</button>

					<div className='md:flex hidden'>
						<CartButtons />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
