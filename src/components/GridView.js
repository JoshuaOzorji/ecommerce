import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
	return (
		<main>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 md:mx-5 md:gap-4">
				{products.map((product) => {
					return <Product key={product.id} {...product} />;
				})}
			</div>
		</main>
	);
};

export default GridView;
