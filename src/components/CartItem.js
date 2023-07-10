import React from "react";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, image, name, color, price, amount }) => {
	const { removeItem, toggleAmount } = useCartContext();

	const increase = () => {
		toggleAmount(id, "inc");
	};

	const decrease = () => {
		toggleAmount(id, "dec");
	};
	return (
		<main className="mt-6">
			<section className="hidden md:grid grid-cols-5 border-b mt-4 py-4">
				<div className="flex justify-center">
					<img src={image} alt={name} className="md:h-28 md:w-32 rounded-lg " />
				</div>

				<div className="flex flex-col justify-center items-start py-0 text-lg">
					<h5 className="pb-2 md:font-bold flex">
						<p className="capitalize-first-letter">{name}</p>
					</h5>
					<p className="flex items-center md:gap-x-2 justify-start">
						<p className="md:text-sm">color:</p>
						<span
							className="inline-block w-3 h-3 rounded-full"
							style={{ background: color }}
						/>
					</p>
				</div>

				<h5 className="flex items-center text-gray-700 text-lg">
					{formatPrice(price)}
				</h5>
				<AmountButtons
					amount={amount}
					increase={increase}
					decrease={decrease}
				/>

				<div className="flex items-center justify-evenly text-lg">
					<h5 className="font-bold text-xl">{formatPrice(price * amount)}</h5>
					<button type="button" onClick={() => removeItem(id)}>
						<FaTrash className="text-red-600" />
					</button>
				</div>
			</section>

			{/* SM Version */}
			<section className="md:hidden flex flex-col gap-y-2 border-b pb-1">
				<div className="flex justify-between h-[70%]">
					<div className="flex items-center gap-x-4">
						<img src={image} alt={name} className="h-14 w-14  rounded-lg " />

						<div className="">
							<p className="capitalize-first-letter text-sm font-semibold py-1">
								{name}
							</p>

							<p className="flex items-center gap-x-[1px] justify-start">
								<p className="hidden md:text-sm ">color:</p>
								<span
									className="inline-block w-2 h-2 rounded-full"
									style={{ background: color }}
								/>
							</p>
						</div>
					</div>

					<h5 className="flex items-center text-gray-700 text-xs">
						{formatPrice(price)}
					</h5>
				</div>

				<div className="flex justify-between items-center h-[30%]">
					<AmountButtons
						amount={amount}
						increase={increase}
						decrease={decrease}
					/>

					<h5 className="font-bold text-xs">{formatPrice(price * amount)}</h5>

					<button type="button" className="" onClick={() => removeItem(id)}>
						<FaTrash className="text-red-600" />
					</button>
				</div>
			</section>
		</main>
	);
};

export default CartItem;
