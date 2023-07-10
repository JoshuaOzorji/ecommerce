import React from "react";

import { Filters, ProductList, Sort, PageHero } from "../components";
const ProductsPage = () => {
	return (
		<main>
			<div className="gradientGreen wrapper py-1">
				<PageHero title="Products" />
			</div>
			<section className="w-full flex md:flex-row sm:flex-col wrapper">
				<div className="md:w-[20%]">
					<Filters />
				</div>

				<div className="md:w-[80%]">
					<Sort />
					<ProductList />
				</div>
			</section>
		</main>
	);
};

export default ProductsPage;
