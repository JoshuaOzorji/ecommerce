import React from "react";
import logo from "../assets/img/logo-black.svg";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { TiTimes } from "react-icons/ti";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";

const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useProductsContext();
	const { myUser } = useUserContext();

	return (
		<section className="font-noto text-xl wrapper font-bold">
			<aside
				className={`${isSidebarOpen ? "sidebar show-sidebar " : "sidebar "}`}>
				<div className="flex justify-between items-center py-2">
					<img
						src={logo}
						alt="byte-crafters"
						className="justify-center w-10 h-10"
					/>
					<button
						type="button"
						className="cursor-pointer"
						onClick={closeSidebar}>
						<TiTimes className="h-8 w-8" />
					</button>
				</div>

				<ul className="grid grid-rows-2 place-content-between py-2">
					<div className="flex flex-col justify-start gap-y-2">
						{links.map(({ id, text, url }) => {
							return (
								<li key={id}>
									<Link to={url} onClick={closeSidebar}>
										{text}
									</Link>
								</li>
							);
						})}

						{myUser && (
							<li>
								<Link to="/checkout" onClick={closeSidebar}>
									Checkout
								</Link>
							</li>
						)}
					</div>

					<div className="flex flex-col justify-end">
						<CartButtons />
					</div>
				</ul>
			</aside>
		</section>
	);
};

export default Sidebar;
