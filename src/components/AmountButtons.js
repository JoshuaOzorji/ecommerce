import React from "react";
import { HiMiniMinusSmall, HiMiniPlusSmall } from "react-icons/hi2";

const AmountButtons = ({ increase, decrease, amount }) => {
	return (
		<main className="flex items-center sm:gap-x-1 md:gap-x-3 font-noto">
			<button type="button" className="" onClick={decrease}>
				<HiMiniMinusSmall className="text-lg" />
			</button>
			<h2 className="sm:text-base md:text-2xl font-bold">{amount}</h2>
			<button type="button" className="" onClick={increase}>
				<HiMiniPlusSmall className="text-lg font-thin" />
			</button>
		</main>
	);
};

export default AmountButtons;
