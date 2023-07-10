import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
	const { addToCart } = useCartContext();
	const { id, stock, colors } = product;

	const [mainColor, setMainColor] = useState(colors[0]);
	const [amount, setAmount] = useState(1);

	const increase = () => {
		setAmount((oldAmount) => {
			let tempAmount = oldAmount + 1;
			if (tempAmount > stock) {
				tempAmount = stock;
			}
			return tempAmount;
		});
	};

	const decrease = () => {
		setAmount((oldAmount) => {
			let tempAmount = oldAmount - 1;
			if (tempAmount < 1) {
				tempAmount = 1;
			}
			return tempAmount;
		});
	};
	return (
		<main>
			<div className="flex sm:text-[12px] md:text-sm items-center">
				<span className="text-gray-500">Colors: </span>
				<div className="flex items-center gap-x-[2px] pl-1">
					{colors.map((color, index) => {
						return (
							<button
								key={index}
								style={{ background: color }}
								className={`${
									mainColor === color ? "color-btn opacity-100" : "color-btn"
								}`}
								onClick={() => setMainColor(color)}>
								{mainColor === color ? (
									<FaCheck className="text-[#444444]" />
								) : null}
							</button>
						);
					})}
				</div>
			</div>

			<div className="flex flex-col justify-start pt-4">
				<div className="flex justify-center mb-[1px]">
					<AmountButtons
						amount={amount}
						increase={increase}
						decrease={decrease}
					/>
				</div>

				<Link
					to="/cart"
					onClick={() => addToCart(id, mainColor, amount, product)}>
					<p className="text-white bg-black inline-block p-2 rounded-lg sm:text-[10px] md:text-xs font-semibold btn-hover">
						ADD TO CART
					</p>
				</Link>
			</div>
		</main>
	);
};

export default AddToCart;
