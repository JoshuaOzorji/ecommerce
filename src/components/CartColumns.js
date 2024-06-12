import React from "react";

const CartColumns = () => {
	return (
		<main className="sm:hidden md:grid md:grid-cols-5 justify-center text-center gap-4">
			<h5 className="col-start-2"> </h5>
			<h5 className="col-start-3"> </h5>
			<h5 className="col-start-4"> </h5>
			<h5 className="col-start-5">Subtotal</h5>
		</main>
	);
};

export default CartColumns;
