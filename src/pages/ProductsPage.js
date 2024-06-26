import React from "react";

import { Filters, ProductList, Sort, PageHero } from "../components";
const ProductsPage = () => {
	return (
		<main>
			<div className='gradientGreen wrapper py-1'>
				<PageHero title='Products' />
			</div>
			<section className='w-full flex md:flex-row flex-col wrapper px-6 md:px-0'>
				<div className='md:w-[20%]'>
					<Filters />
				</div>

				<div className='md:w-[80%]'>
					<Sort />
					<ProductList />
				</div>
			</section>
		</main>
	);
};

export default ProductsPage;
